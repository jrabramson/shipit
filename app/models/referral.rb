class Referral < ActiveRecord::Base
	validates :campaign, :email, :first_name, :last_name, :company, :referree, :presence => true
	belongs_to :campaign

	after_save :push_lead

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
				email: referree
			}
		}.to_json
	end

	def referree_params
		{ 
			email: referree,
			name: 'test',
			source: campaign.contact.email 
		}.to_json
	end

	def amount
		campaign.referrals.count
	end
end
