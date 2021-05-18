# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Listing.destroy_all

listing_0007 = Listing.create!(
  street_address: "129 E Market St", 
  city: "Rhinebeck",
  state: "NY",
  postal_code: 12572,
  description: "Quintessential 1850s Rhinebeck Village farmhouse, rebuilt from top to bottom and professionally designed by Sarah Norwood Interiors. The original wide board floors have been restored, the original exposed brick walls were finished with plaster treatment and the exposed beams have been revealed. Enter through the charming front gate into the enclosed three-season sunroom. The main floor has a flexible open floor plan, while the back of the house was added on to create a designer's dream kitchen with Smeg appliances, deVOL kitchen tap & pot filler and Cl tile. Upstairs luxury primary suite with vaulted ceiling in the bedroom, and luxuriously renovated bathroom with freestanding tub, glass & tile shower, and double vanity with Apparatus Studio lighting. Two additional bedrooms, a second full bath and laundry are on the second floor. All new: roof, insulation, electric, plumbing, propane furnace, forced air heating & cooling, Marvin windows, radiant heat in the kitchen and master bath, septic system and bluestone paths & landscaping. On a half acre perfect for a swimming pool. Walk to all of the village amenities.",
  beds: 3,
  baths: 3,
  status: "For sale",
  price: 1100000,
  listing_type: "Single Family Residence",
  sq_ft: 1806,
  lot_size: 0.56,
  year_built: 1856,
  latitude: 41.92763724896673, 
  longitude: -73.90380712217899
)

file = open('https://dwel-us-dev.s3.amazonaws.com/L0007/129_e_market_001.jpeg')
listing_0007.photos.attach(io: file, filename: '129_e_market_001.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0007/129_e_market_002.jpeg')
listing_0007.photos.attach(io: file, filename: '129_e_market_002.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0007/129_e_market_003.jpeg')
listing_0007.photos.attach(io: file, filename: '129_e_market_003.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0007/129_e_market_004.jpeg')
listing_0007.photos.attach(io: file, filename: '129_e_market_004.jpeg')


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
  listing_type: "House",
  sq_ft: 2400,
  lot_size: 1,
  year_built: 1992,
  latitude: 41.55348374235789, 
  longitude: -73.59157263753615
)

file = open('https://dwel-us-dev.s3.amazonaws.com/L0001/60_poppy.jpeg')
listing_0001.photos.attach(io: file, filename: '60_poppy.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0001/60_poppy_002.jpeg')
listing_0001.photos.attach(io: file, filename: '60_poppy_002.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0001/60_poppy_003.jpeg')
listing_0001.photos.attach(io: file, filename: '60_poppy_003.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0001/60_poppy_004.jpeg')
listing_0001.photos.attach(io: file, filename: '60_poppy_004.jpeg')

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
  listing_type: "House",
  sq_ft: 2450,
  lot_size: 1.32,
  year_built: 2004,
  latitude: 41.96344401117842, 
  longitude: -73.49923467337496
)

file = open('https://dwel-us-dev.s3.amazonaws.com/L0002/34_country_001.jpeg')
listing_0002.photos.attach(io: file, filename: '34_country_001.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0002/34_country_002.jpeg')
listing_0002.photos.attach(io: file, filename: '34_country_002.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0002/34_country_003.jpeg')
listing_0002.photos.attach(io: file, filename: '34_country_003.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0002/34_country_004.jpeg')
listing_0002.photos.attach(io: file, filename: '34_country_004.jpeg')

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
  year_built: 1860,
  latitude: 41.713892173687825, 
  longitude: -73.9334118445478
)

file = open('https://dwel-us-dev.s3.amazonaws.com/L0003/95_delafield_001.jpeg')
listing_0003.photos.attach(io: file, filename: '95_delafield_001.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0003/95_delafield_002.jpeg')
listing_0003.photos.attach(io: file, filename: '95_delafield_002.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0003/95_delafield_003.jpeg')
listing_0003.photos.attach(io: file, filename: '95_delafield_003.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0003/95_delafield_004.jpeg')
listing_0003.photos.attach(io: file, filename: '95_delafield_004.jpeg')

listing_0004 = Listing.create!(
  street_address: "49 S Quaker Hill Rd", 
  city: "Pawling",
  state: "NY",
  postal_code: 12564,
  description: "Ravinewood, a Majestic Eqyptian Revival on 16.62 acres on Quaker Hill. High ceilings, wood floors throughout, fine architectural details &  period moldings. The spacious LR has 2 fplcs. & pocket doors, great for entertaining. The formal DR w/fplc. opens to the kitchen which has been updated. The wide hallway leads to a big covered porch w/awnings overlooking the secret garden & park like property. Upstairs, a dramatic landing, which accesses 4 BR's & 2 full baths. The master suite has its own study. The full basement is finished, also with a fireplace. There is a 16 stall barn which needs new electric & updating. Paddocks & outdoor riding ring complete the horse property aspect. A 2BR caretakers cottage w/storage underneath is located away from the house.  Elegant, well maintained, this is a very special estate. Easy access to trains, shopping, restaurants & riding trails.",
  beds: 4,
  baths: 4,
  status: "For sale",
  price: 1890000,
  listing_type: "House",
  sq_ft: 4480,
  lot_size: 16.62,
  year_built: 1840,
  latitude: 41.53268554400293, 
  longitude: -73.56773635804839 
)

file = open('https://dwel-us-dev.s3.amazonaws.com/L0004/49_quaker_001.jpeg')
listing_0004.photos.attach(io: file, filename: '49_quaker_001.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0004/49_quaker_002.jpeg')
listing_0004.photos.attach(io: file, filename: '49_quaker_002.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0004/49_quaker_003.jpeg')
listing_0004.photos.attach(io: file, filename: '49_quaker_003.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0004/49_quaker_004.jpeg')
listing_0004.photos.attach(io: file, filename: '49_quaker_004.jpeg')

listing_0005 = Listing.create!(
  street_address: "552 Warren St", 
  city: "Hudson",
  state: "NY",
  postal_code: 12534,
  description: "The Sullivan Residence, an elegant brick Italianate townhouse, sits in the center of Warren St in Hudson. The home has been painstakingly restored to its original grandeur preserving details like carved marble mantles, soaring ceilings, & classic 2-over-2 windows. The impressive foyer leads to the extraordinary double parlors connected by a resplendent wide arch, a reading room, powder room, and a stylish kitchen.  The turned staircase leads up to the 2nd and 3rd floors with 4 BRs, 2 light filled offices, and 3 additional baths with WaterWorks fixtures. The back of the house has a gorgeous Knightsbridge style garden with a whimsical shamiana canopy, mature plantings, a blue stone veranda, and a fully insulated garage that could be used as a gym or art studio. The home offers charm, grace, comfort and privacy. Its central location provides easy access to Hudson's excellent selection of restaurants, galleries and shopping. It is chic city living surrounded by awe-inspiring countryside.",
  beds: 4,
  baths: 4,
  status: "For sale",
  price: 1750000,
  listing_type: "Single Family Residence",
  sq_ft: 3408,
  lot_size: 0.069,
  year_built: 1860,
  latitude: 42.24868904882388, 
  longitude: -73.78466027336604
)

file = open('https://dwel-us-dev.s3.amazonaws.com/L0005/552_warren_001.jpeg')
listing_0005.photos.attach(io: file, filename: '552_warren_001.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0005/552_warren_002.jpeg')
listing_0005.photos.attach(io: file, filename: '552_warren_002.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0005/552_warren_003.jpeg')
listing_0005.photos.attach(io: file, filename: '552_warren_003.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0005/552_warren_004.jpeg')
listing_0005.photos.attach(io: file, filename: '552_warren_004.jpeg')

listing_0006 = Listing.create!(
  street_address: "118 N 5th St", 
  city: "Hudson",
  state: "NY",
  postal_code: 12534,
  description: "Shelter magazine-worthy c. 1915 row house. Light and bright 1,200 sq. ft. semi-open floor plan offer three very thoughtful common spaces - galley style kitchen, dinner party sized dining room, and a living room that gives you space to lounge and pretend you're going to read a book. Upstairs features three bedrooms of various size: small, medium, and large share a full bath with deep soaking tub.City-sized, fenced backyard with off-street parking. This classic, easy to maintain pied-a-terre sits on a wide, picturesque street in the Armory District, close to all things Hudson.",
  beds: 3,
  baths: 1,
  status: "For sale",
  price: 399000,
  listing_type: "Single Family Residence",
  sq_ft: 1200,
  lot_size: 0.069,
  year_built: 1915,
  latitude: 42.25256818238109, 
  longitude: -73.78258214453082
)

file = open('https://dwel-us-dev.s3.amazonaws.com/L0006/118_N_5_001.jpeg')
listing_0006.photos.attach(io: file, filename: '118_N_5_001.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0006/118_N_5_002.jpeg')
listing_0006.photos.attach(io: file, filename: '118_N_5_002.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0006/118_N_5_003.jpeg')
listing_0006.photos.attach(io: file, filename: '118_N_5_003.jpeg')
file = open('https://dwel-us-dev.s3.amazonaws.com/L0006/118_N_5_004.jpeg')
listing_0006.photos.attach(io: file, filename: '118_N_5_004.jpeg')
