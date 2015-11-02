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
  		:thumb => "100x100#" }
  validates_attachment_content_type :media, :content_type => /\Aimage\/.*\Z/

  auto_html_for :video do
    youtube(:width => 400, :height => 250)
  end

  def chosen_media
    self.video.present? ? self.video_html
      : self.media.exists? ? ActionController::Base.helpers.image_tag(self.media.url(:medium))
      : ActionController::Base.helpers.image_tag(ActionController::Base.helpers.asset_path('missing.gif'))
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

  def to_param
    custom_path
  end
end
