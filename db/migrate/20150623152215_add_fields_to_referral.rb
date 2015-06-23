class AddFieldsToReferral < ActiveRecord::Migration
  def change
    add_column :referrals, :description, :string
  end
end
