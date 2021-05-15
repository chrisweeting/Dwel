class ChangeDescriptionColListings < ActiveRecord::Migration[5.2]
  def up
  change_column :listings, :description, :text
  end

  def down
  change_column :listings, :description, :string
  end
end
