class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.references :contact, index: true, foreign_key: true
      t.integer :goal
      t.date :expiry, null: false
      t.string :title
      t.string :hub
      t.string :token
      t.string :video
      t.string :custom_path, null: false
      t.text :details
      
      t.timestamps null: false
    end
  end
end
