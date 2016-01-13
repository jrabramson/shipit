class CampaignsController < ApplicationController
  before_action :set_campaign, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_contact!, only: [:edit, :update, :destroy, :new, :create]

  require 'csv'

	attr_accessor :progress

	def index
	end

	def browse
		@campaigns = Campaign.visible.shuffle
	end

	def new
		@campaign = Campaign.new
	end

  def edit
  end

  def show
  end

  def csv
  	respond_to do |format|
      format.csv { send_data current_contact.campaigns.to_csv(params[:csv_id]) }
    end
  end

  def leaderboard
		@collection ||= Campaign.typed_collection
  end

  def client_leaderboard
    @collection ||= Campaign.client_collection(params[:client])
  end

  def manage
  	@campaigns ||= current_contact.campaigns.map { |ca| {
        campaign: ca, 
        referrals: ca.referrals,
        icon: ca.icon.url(:thumb) 
      } 
    }
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
  	  # format.html { redirect_to manage_url, notice: 'Campaign was successfully destroyed.' }
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
    @campaign ||= Campaign.find_by(custom_path: params[:custom_path])
  end

  def campaign_params
    params.require(:campaign).permit(:title, :details, :goal, :expiry, :hub, :token, :media, :icon, :video, :kind, :custom_path, rewards_attributes: [:id, :title, :note, :phone, :milestone, :icon, :description, :referree_name, :referree_email, :_destroy])
  end

end
