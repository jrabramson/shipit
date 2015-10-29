class AddCustomPathToCampaigns < ActiveRecord::Migration
  def change
    add_column :campaigns, :custom_path, :string, null: false
  end
end
