class AddIconsToCampaigns < ActiveRecord::Migration
	def self.up
		change_table :campaigns do |t|
		  t.attachment :icon
		end
	end

	def self.down
		drop_attached_file :campaigns, :icon
	end
end
