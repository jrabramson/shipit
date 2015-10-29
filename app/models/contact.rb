class Contact < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
         # , :confirmable

  has_many :campaigns
  has_many :referrals, through: :campaign

  has_attached_file :avatar, :styles => { :large => '1000x1000>', :medium => "300x300>", :thumb => "100x100#" }, :default_url => "missing.gif"
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

  def nav_avatar
  	self.avatar.url(:medium) ? self.avatar.url(:medium) : ActionController::Base.helpers.asset_path('missing.gif')
  end
end
