class Referral < ActiveRecord::Base
	validates :campaign, :email, :first_name, :last_name, :company, :referree_name, :referree_email, :presence => true
	validates_format_of :email, with: /.+@.+\..+/i
	validates_format_of :referree_email, with: /.+@.+\..+/i
	belongs_to :campaign

	# after_save :push_lead

	def push_lead
		return unless campaign.token?
		conn = Faraday.new('https://www.influitiveqa.com/api/')
		conn.authorization :Token, :token => campaign.token
		conn.headers['Content-Type'] = 'application/json'
		conn.headers['Accept'] = 'application/json'

		conn.post 'members', referree_params
		conn.post 'referrals', referral_params
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
