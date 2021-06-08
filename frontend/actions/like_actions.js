import * as LikeApiUtil from '../util/like_api_util';

export const FETCH_LIKES = 'FETCH_LIKES';
export const CREATE_LIKE = 'CREATE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';



const getLikes = (likes) => ({
  type: FETCH_LIKES,
  likes,
});

const addLike = ({ user_id, listing_id }) => ({
  type: CREATE_LIKE,
  user_id,
  listing_id,
});

const deleteLike = (listingId) => ({
  type: REMOVE_LIKE,
  listingId,
});


export const fetchLikes = () => (dispatch) => {
  return LikeApiUtil.fetchLikes().then((likes) => {
    return dispatch(getLikes(likes));
  });
};

export const createLike = (like) => dispatch => (
  LikeApiUtil.addLike(like).then(like => (
    dispatch(addLike(like))
  ))
);

export const removeLike = (listingId) => dispatch => (
  LikeApiUtil.removeLike(listingId).then(like => (
    dispatch(deleteLike(like))
  ))
);