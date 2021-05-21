export const fetchListings = (filters) => (
  $.ajax ({
    method: 'GET',
    url: '/api/listings',
    data: { ...filters },
  })
);

export const fetchListing = (listingId) => (
  $.ajax ({
    method: 'GET',
    url: `/api/listings/${listingId}`
  })
);

export const updateListing = (listing) => (
  $.ajax ({
    method: 'PATCH',
    url: `/api/listings/${listing.id}`,
    data: { listing },
  })
);

export const searchListings = (query) => (
  $.ajax ({
    method: 'GET',
    url: `/api/listings`,
    data: { query },
  })
);



