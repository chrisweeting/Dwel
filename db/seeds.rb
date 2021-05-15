# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Listing.delete_all

listing_0001 = Listing.create!(
  street_address: "60 Poppys Ln", 
  city: "Pawling",
  state: "NY",
  postal_code: 12564,
  description: "Majestic Ranch on private beautifully landscaped acre. All the space you dream of & the lifestyle you deserve. Open floor plan, gleaming hardwood floors. Kitchen w/ inlaid hardwood floor, Bosch SS appliances, gas cooktop, double wall ovens, access to deck for outdoor dining. Dining room, living room, plenty of room for family and friends to get togethers. Main bedroom suite has walk in closet, pellet stove and slider to deck. 2 addition bedrooms, full ceramic tiled bathroom finishes off the main floor. Full finished basement with Large family room w/fireplace, full bathroom, and access to the backyard. Also has Office/Den and laundry room. Oversized attached garage. Private backyard perfect for entertaining that features a firepit and outdoor kitchen. Whole house generator, additional 1 car garage, irrigation system, landscape lighting. Just over an hour from NYC, minutes to Metro North, shops and restaurants.",
  beds: 3,
  baths: 2,
  status: "For sale",
  price: 749000,
  listing_type: "house",
  sq_ft: 2400,
  lot_size: 1,
  year_built: 1992
)

listing_0002 = Listing.create!(
  street_address: "34 Country View Rd", 
  city: "Millerton",
  state: "NY",
  postal_code: 12546,
  description: "Spring has sprung inside and out of this beautiful Cape style home. Upon entry into Country View road you have majestic mountain views! Completely, repainted and ready for the next story of pictures to hang on the wall. Enter through mud room, kick your shoes off and relax in spacious sun filled kitchen. Plenty of room for breakfast table for early morning coffee & bird watching out large bay window. For those special occasions you have a formal dining area, good size living room and 2 potential bedrooms on the first floor. One bedroom is currently being used as an office. Leading to the second level you have a nice wide oak staircase with 2 large bedrooms, walk in closet and full bath. Unfinished lower level is open and great for storage, work shop or finishing if needing more space. Outside deck off kitchen allows for extending dining, barbecuing and when sun is beaming, awning is in place for comfort while games are being played in the level back yard. Close by amenities include rail trail, restaurants, minutes to town and Harlem Valley Train Line 20 minutes away. Move In Ready!",
  beds: 3,
  baths: 2,
  status: "For sale",
  price: 749000,
  listing_type: "house",
  sq_ft: 2450,
  lot_size: 1.32,
  year_built: 2004
)

listing_0003 = Listing.create!(
  street_address: "95 Delafield St", 
  city: "Poughkeepsie",
  state: "NY",
  postal_code: 12601,
  description: "An investors dream to own a fully rented property in a dream location. This Poughkeepsie Multi-Family is located on desirable Delafield St featuring three individual units with their own private entrances. All three units have access to the huge yard and back deck area. Walking distance to Marist College, Metro North, Amtrak, the Walkway Over the Hudson, restaurants and shopping. Unit 1 & 2 located in 95 Delafield each features a large bedroom, roomy kitchen, hardwood and tiled floors while Unit 3 in 97 is a duplex that offers 3 bedrooms. Invest in your future today!",
  status: "For sale",
  price: 749000,
  listing_type: "Multi Family",
  sq_ft: 2120,
  year_built: 1860
)