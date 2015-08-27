class AddFieldsToContacts < ActiveRecord::Migration
  def change
  	add_column :contacts, :name, :string
    add_column :contacts, :company, :string
    add_column :contacts, :bio, :string
  end
end
