export const fetchListings = (filters) => (
  $.ajax ({
    method: 'GET',
    url: '/api/listings',
    filters,
  })
);

export const fetchListing = (listingId) => (
  $.ajax ({
    method: 'GET',
    url: `/api/listings/${listingId}`
  })
);