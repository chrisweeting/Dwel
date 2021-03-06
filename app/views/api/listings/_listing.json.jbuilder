json.extract! listing, 
      :id, 
      :street_address,
      :city,
      :state,
      :postal_code,
      :description,
      :beds,
      :baths,
      :status,
      :price,
      :listing_type,
      :sq_ft,
      :lot_size,
      :year_built,
      :created_at,
      :latitude,
      :longitude,
      :likers

json.likers listing.likers.map {|user| user.id}
json.photoUrls listing.photos.map { |file| url_for(file) }