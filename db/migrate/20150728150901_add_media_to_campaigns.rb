class AddMediaToCampaigns < ActiveRecord::Migration
  def self.up
    change_table :campaigns do |t|
      t.attachment :media
    end
  end

  def self.down
    drop_attached_file :campaigns, :media
  end
end
