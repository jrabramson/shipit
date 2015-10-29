class Referral < ActiveRecord::Base
	validates :campaign_id, :email, :first_name, :last_name, :company, :referree_name, :referree_email, :presence => true
	validates_format_of :email, with: /.+@.+\..+/i
	validates_format_of :referree_email, with: /.+@.+\..+/i
	belongs_to :campaign

	def push_lead
		return unless campaign.token?
		conn = Faraday.new("https://#{campaign.hub}.influitiveqa.com/api/")
		conn.authorization :Token, :token => campaign.token
		conn.headers['Content-Type'] = 'application/json'
		conn.headers['Accept'] = 'application/json'

		res1 = conn.post 'members', referree_params
		res2 = conn.post 'referrals', referral_params

		[res1, res2]
	end
	# handle_asynchronously :push_lead

	def referral_params
		{ 
			prospect: {
				email: email,
				first_name: first_name,
				last_name: last_name,
				company: company,
			},
			advocate: {
				email: referree_email
			}
		}.to_json
	end

	def referree_params
		{ 
			email: referree_email,
			name: referree_name,
			source: campaign.contact.email 
		}.to_json
	end

	def amount
		campaign.referrals.count
	end
end
