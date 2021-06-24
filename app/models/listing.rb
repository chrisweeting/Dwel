# == Schema Information
#
# Table name: listings
#
#  id             :bigint           not null, primary key
#  street_address :string           not null
#  city           :string           not null
#  state          :string           not null
#  postal_code    :integer          not null
#  description    :text             not null
#  status         :string           not null
#  price          :integer          not null
#  listing_type   :string           not null
#  sq_ft          :integer          not null
#  lot_size       :float
#  year_built     :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  longitude      :float
#  latitude       :float
#  beds           :integer
#  baths          :integer
#
class Listing < ApplicationRecord
  validates :street_address, :city, :state, :postal_code, presence: true
  validates :description, :status, :price, :listing_type, :sq_ft, presence: true
  
  # has_one_attached :photo
  has_many_attached(
    :photos
    
  )

  has_many(
    :likes, 
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Like
  )

  has_many(
    :likers,
    through: :likes,
    source: :liker
  )

  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:latitude])
      .where("latitude > ?", bounds[:southWest][:latitude])
      .where("longitude > ?", bounds[:southWest][:longitude])
      .where("longitude < ?", bounds[:northEast][:longitude])
  end

  def self.search_listing(query)
    
    return self.where("LOWER(state) Like ?", "%#{query.downcase}%" )
      .or(where("LOWER(city) Like ?", "%#{query.downcase}%" ))
      .or(where("CAST(postal_code AS TEXT) Like ?", "%#{query}%" ))
      .or(where("LOWER(street_address) Like ?", "%#{query.downcase}%" ))
  end

  def self.filter_listings(filters)
    #  
    self.where("beds >= ?", filters[:minBeds] )
      .where("baths >= ?", filters[:minBaths] )
      .where("price >= ?", filters[:minPrice] )
      .where("sq_ft >= ?", filters[:minSqft] )
  end

end
