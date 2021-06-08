class ChangeSearchRecords < ActiveRecord::Migration[5.2]
  def change
    change_column :search_records, :user_id, :integer, :null => true
  end
end
