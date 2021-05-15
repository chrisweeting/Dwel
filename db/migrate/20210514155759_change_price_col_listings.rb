class ChangePriceColListings < ActiveRecord::Migration[5.2]
  def up
  change_column :listings, :price, :integer, using: 'price::integer'
  end

  def down
  change_column :listings, :price, :string
  end
end
