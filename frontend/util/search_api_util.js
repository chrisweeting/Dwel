export const fetchSearches = () => (
  $.ajax({
    method: 'GET',
    url: '/api/search_records',
  })
);

export const fetchSearch = (searchId) => (
  $.ajax({
    method: 'GET',
    url: `/api/search_records/${searchId}`
  })
);

export const updateSearch = (search_record) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/search_records/${search_record.id}`,
    data: { search_record },
  })
);

export const addSearch = (search_record) => (
  $.ajax({
    method: 'POST',
    url: '/api/search_records',
    data: { search_record }
  })
);

export const removeSearch = (searchId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/search_records/${searchId}`,
  })
);