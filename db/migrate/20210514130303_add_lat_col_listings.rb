class AddLatColListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :longitude, :float
    add_column :listings, :latitude, :float
  end
end
