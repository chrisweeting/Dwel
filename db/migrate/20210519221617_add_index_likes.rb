class AddIndexLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:user_id, :listing_id], unique: true
  end
end
