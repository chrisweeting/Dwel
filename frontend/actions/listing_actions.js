import * as ListingApiUtil from '../util/listing_api_util';

export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";

const receiveAllListings = (listings) => ({
  type: RECEIVE_ALL_LISTINGS,
  listings
});

const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing
});




// export const fetchListings = () => (dispatch) => (
//   ListingApiUtil.fetchListings()
//     .then((listings) => dispatch(receiveAllListings(listings)))
// );
// export const fetchListing = (listingId) => (dispatch) => (
//   ListingApiUtil.fetchListing(listingId)
//     .then((res) => dispatch(receiveListing(res)))
// );


export const fetchListings = (filters) => (dispatch) => {
  // debugger
  return ListingApiUtil.fetchListings(filters).then((listings) => {
    // debugger
    return dispatch(receiveAllListings(listings));
  });
};

export const fetchListing = (listingId) => (dispatch) => {
  return ListingApiUtil.fetchListing(listingId).then(({listing}) => {
    // debugger
    return dispatch(receiveListing(listing));
  });
};

export const updateListing = (listing) => (dispatch) => {
  return ListingApiUtil.updateListing(listing).then((listing) => {
    // debugger
    return dispatch(receiveListing(listing));
  });
};

