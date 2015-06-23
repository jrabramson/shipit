class CreateAdvocates < ActiveRecord::Migration
  def change
    create_table :advocates do |t|
      t.string :name
      t.string :company
      t.string :email
      t.string :ref_email
      t.string :note

      t.timestamps null: false
    end
  end
end
