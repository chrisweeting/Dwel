import * as LikeApiUtil from '../util/like_api_util';

export const FETCH_LIKES = 'FETCH_LIKES';
export const CREATE_LIKE = 'CREATE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';



const getLikes = (likes) => ({
  type: FETCH_LIKES,
  likes,
});

const addLike = ({ like, userId, listingId }) => ({
  type: CREATE_LIKE,
  like,
  userId,
  listingId,
});

const deleteLike = (likeId) => ({
  type: REMOVE_LIKE,
  likeId,
});


export const fetchLikes = () => (dispatch) => {
  // debugger
  return LikeApiUtil.fetchLikes().then((likes) => {
    // debugger
    return dispatch(getLikes(likes));
  });
};

export const createLike = (like) => dispatch => (
  LikeApiUtil.addLike(like).then(like => (
    dispatch(addLike(like))
  ))
);

export const removeLike = (likeId) => dispatch => (
  LikeApiUtil.removeLike(likeId).then(like => (
    dispatch(deleteLike(like))
  ))
);