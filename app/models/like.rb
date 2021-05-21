# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  listing_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Like < ApplicationRecord

    belongs_to(
        :liker,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    )

    belongs_to(
        :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing
    )

  
end
