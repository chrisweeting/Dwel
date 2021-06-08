class CreateSavedSearchesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :saved_searches do |t|
      t.integer :user_id, null: false
      t.integer :max_price
      t.integer :max_sqft
      t.integer :min_baths
      t.integer :min_beds
      t.integer :min_price
      t.string :query
    end

    add_index :saved_searches, :user_id
  end
end
