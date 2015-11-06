class AddJuniorToCampaigns < ActiveRecord::Migration
  def change
    add_column :campaigns, :junior, :boolean, default: false
  end
end
