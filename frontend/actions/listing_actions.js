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

export const fetchListings = () => dispatch => {
  return ListingApiUtil.fetchListings().then(listings => {
    debugger
    return dispatch(receiveAllListings(listings))
  }
  )
};

export const fetchListing = (listingId) => (dispatch) => (
  ListingApiUtil.fetchListing(listingId)
    .then((res) => dispatch(receiveListing(res)))
);
