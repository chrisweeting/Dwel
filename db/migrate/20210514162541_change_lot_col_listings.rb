class ChangeLotColListings < ActiveRecord::Migration[5.2]
  def up
  change_column :listings, :lot_size, :float
  end

  def down
  change_column :listings, :lot_size, :integer
  end
end
