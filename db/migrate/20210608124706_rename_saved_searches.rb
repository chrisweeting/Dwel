class RenameSavedSearches < ActiveRecord::Migration[5.2]
  def change
    rename_table :saved_searches, :search_records
  end
end
