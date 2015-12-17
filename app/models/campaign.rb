class Campaign < ActiveRecord::Base
  belongs_to :contact
  has_many :referrals, inverse_of: :campaign
  has_many :rewards, inverse_of: :campaign
  accepts_nested_attributes_for :rewards, :allow_destroy => true

  validates_presence_of :expiry, :title, :goal, :custom_path
  validates_uniqueness_of :custom_path

  has_attached_file :media, 
    :styles => { 
      :large => '1000x1000>', 
      :medium => "300x300>", 
      :thumb => "100x100#" }, default_url: ':default_image_url'
  validates_attachment_content_type :media, :content_type => /\Aimage\/.*\Z/

  has_attached_file :icon, 
  	:styles => { 
  		:thumb => "100x100#" }, default_url: ':default_image_url'
  validates_attachment_content_type :icon, :content_type => /\Aimage\/.*\Z/

  auto_html_for :video do
    youtube(:width => 400, :height => 250)
  end

  def self.to_csv id
    CSV.generate do |csv|
      where(id: id).each do |campaign|
        csv << campaign.referrals.column_names
        campaign.referrals.all.each do |ref|
          csv << ref.attributes.values_at(*campaign.referrals.column_names)
        end
      end
    end
  end

  def self.typed_collection
    {
        "AE / RSM": Campaign.where(kind: 'AE / RSM').sort_by(&:progress).reverse,
        "SDR": Campaign.where(kind: 'SDR').sort_by(&:progress).reverse,
        "Marketing": Campaign.where(kind: 'Marketing').sort_by(&:progress).reverse
    }
  end

  def self.client_collection client
    visible.where(hub: client).sort_by(&:progress).reverse
  end

  def self.customer
    where(kind: 'Customer')
  end

  Paperclip.interpolates :default_image_url do |attachment, style|
    ActionController::Base.helpers.asset_path('missing.gif')
  end

  def chosen_media
    self.video.present? ? self.video_html
      : ActionController::Base.helpers.image_tag(self.media.url(:medium))
  end

  def video_id
    query_string = URI.parse(self.video).query
    parameters = Hash[URI.decode_www_form(query_string)]
    parameters['v']
  end

  def hero
    video.present? ? "url(http://img.youtube.com/vi/#{video_id}/0.jpg)"
       : media.exists? ? "url(#{self.media.url(:medium)})"
       : ''
  end

  def self.visible
    where('expiry > ?', Time.now)
  end

  def progress
    referrals.count
  end

  def to_param
    custom_path
  end
end
