


export const fetchLikes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/likes',
  })
);

export const addLike = ({ userId, listingId }) => (
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: { userId, listingId }
  })
);

export const removeLike = (likeId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${likeId}`,
  })
);