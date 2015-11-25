class ChangeCampaignJuniorToKind < ActiveRecord::Migration
  def up
    add_column 	  :campaigns, :kind, :string, default: "AE / RSM"
    execute "UPDATE campaigns SET kind = 'SDR' WHERE junior = true"
    remove_column :campaigns, :junior
  end

  def down
    add_column 	  :campaigns, :junior, :boolean, default: false
    execute "UPDATE campaigns SET junior = true WHERE kind = 'SDR'"
  	remove_column :campaigns, :kind
  end
end
