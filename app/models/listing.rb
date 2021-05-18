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
  has_many_attached :photos

  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:latitude])
      .where("latitude > ?", bounds[:southWest][:latitude])
      .where("longitude > ?", bounds[:southWest][:longitude])
      .where("longitude < ?", bounds[:northEast][:longitude])
  end

end
