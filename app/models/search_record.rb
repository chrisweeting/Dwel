# == Schema Information
#
# Table name: search_records
#
#  id        :bigint           not null, primary key
#  user_id   :integer          not null
#  max_price :integer
#  max_sqft  :integer
#  min_baths :integer
#  min_beds  :integer
#  min_price :integer
#  query     :string
#
class SearchRecord < ApplicationRecord

  belongs_to(
    :searcher,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User,
    optional: true
  )

end
