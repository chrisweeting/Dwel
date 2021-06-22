class AddColumnSearchRecords < ActiveRecord::Migration[5.2]
  def change
    add_column :search_records, :title, :string
  end
end
