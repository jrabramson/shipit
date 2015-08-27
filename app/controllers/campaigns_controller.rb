class CampaignsController < ApplicationController
  before_action :set_campaign, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_contact!, only: [:new, :edit, :destroy, :create, :manage]

	def index
		@campaigns ||= Campaign.all
	end

	def new
		@campaign = Campaign.new
	end

    def edit
    end

    def show
    end

    def manage
    	@campaigns ||= current_contact.campaigns
    end

    def update
		respond_to do |format|
		  if @campaign.update(campaign_params)
		    format.html { redirect_to @campaign, notice: 'Campaign was successfully updated.' }
		    format.json { render :show, status: :ok, location: @campaign }
		  else
		    format.html { render :edit }
		    format.json { render json: @campaign.errors, status: :unprocessable_entity }
		  end
		end
    end

    def destroy
    	@campaign.destroy
    	respond_to do |format|
    	  format.html { redirect_to manage_url, notice: 'Campaign was successfully destroyed.' }
    	  format.json { head :no_content }
    	end
    end

	def create
	  @campaign = Campaign.new(campaign_params)
	  @campaign.contact_id = current_contact.id
	  respond_to do |format|
	    if @campaign.save
	      format.html { redirect_to @campaign, notice: 'campaign was successfully created.' }
	      format.json { render :show, status: :created, location: @campaign }
	    else
	      format.html { render :new }
	      format.json { render json: @campaign.errors, status: :unprocessable_entity }
	    end
	  end
	end

private
    def set_campaign
      @campaign ||= Campaign.find(params[:id])
    end

    def campaign_params
      params.require(:campaign).permit(:title, :details, :goal, :expiry, :hub, :token, :media, :video, rewards_attributes: [:id, :title, :description, :milestone, :icon, :_destroy])
    end
end