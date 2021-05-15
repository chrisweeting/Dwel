export const fetchListings = () => (
  $.ajax ({
    method: 'GET',
    url: '/api/listings',
  })
);

export const fetchListing = (listingId) => (
  $.ajax ({
    method: 'GET',
    url: `/api/listings/${listingId}`
  })
);