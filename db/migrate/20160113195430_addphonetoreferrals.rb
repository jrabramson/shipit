class Addphonetoreferrals < ActiveRecord::Migration
  def change
    add_column :referrals, :phone, :string, default: ''
  end
end
