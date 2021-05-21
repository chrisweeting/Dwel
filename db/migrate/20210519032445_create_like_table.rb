class CreateLikeTable < ActiveRecord::Migration[5.2]
  def change
    create_table :like do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false

      t.timestamps
    end
  end
end
