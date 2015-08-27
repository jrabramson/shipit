class CreateReferrals < ActiveRecord::Migration
  def change
    create_table :referrals do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :referree
      t.string :company
      t.string :description
      t.timestamps null: false
    end

    add_reference :referrals, :campaign, index: true
  end
end
