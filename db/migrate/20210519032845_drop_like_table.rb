class DropLikeTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :like_tables
  end
end
