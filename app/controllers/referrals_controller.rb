class ReferralsController < ApplicationController
  before_action :set_referral, only: [:show, :edit, :update, :destroy, :push, :deny]

  def create
    @referral = Referral.new(referral_params)
    respond_to do |format|
      if @referral.save
        format.json { render json: {status: 'Thanks for your referral. We have received it and will be in touch soon.', progress: @referral.amount } }
      else
        format.json { render json: @referral.errors.full_messages, status: :unprocessable_entity}
      end
    end
  end

  def update
    respond_to do |format|
      if @referral.update(referral_params)
        format.html { redirect_to @referral, notice: 'Referral was successfully updated.' }
        format.json { render :show, status: :ok, location: @referral }
      else
        format.html { render :edit }
        format.json { render json: @referral.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @referral.destroy
    respond_to do |format|
      format.html { redirect_to referrals_url, notice: 'Referral was successfully removed.' }
      format.json { head :no_content }
    end
  end

  def push
    respond_to do |format|
      lead_push = @referral.push_lead
      if lead_push.all? { |r| r && r.status == 201 }
        format.json { render json: {status: 'Successfully Sent'} }
      else
        format.json { render json: @referral.errors.full_messages, status: :unprocessable_entity}
      end
    end
  end

  def deny
    respond_to do |format|
      @referral.destroy
      format.json { render json: {status: 'Successfully Denied'} }
    end
  end

  private

    def set_referral
      @referral = Referral.find(params[:id])
    end

    def referral_params
      params.require(:referral).permit(:campaign_id, :first_name, :last_name, :email, :note, :referree_name, :referree_email, :company)
    end
end
