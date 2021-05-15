class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :postal_code, null: false
      t.string :description, null: false
      t.string :status, null: false
      t.string :price, null: false
      t.string :type, null: false
      t.integer :sq_ft, null: false
      t.integer :lot_size
      t.integer :year_built

      t.timestamps
    end

    add_index :listings, :id
  end
end
