import { createAction, handleActions } from "redux-actions";

const FOLLOW = 'profile/FOLLOW';
const UNFOLLOW = 'profile/UNFOLLOW';
const CHECK_FOLLOW = 'profile/CHECK_FOLLOW';
const UPDATE_FOLLOWING_NUMBER = 'profile/UPDATE_FOLLOWING_NUMBER';
const UPDATE_FOLLOWER_NUMBER = 'profile/UPDATE_FOLLOWER_NUMBER';
const UPDATE_POSTS = 'profile/UPDATE_POSTS';
const UPDATE_LIKES_POSTS = 'profile/UPDATE_LIKES_POSTS';

export const follow = createAction(FOLLOW);
export const unfollow = createAction(UNFOLLOW);
export const checkFollow = createAction(CHECK_FOLLOW, isfollowing => isfollowing);
export const updateFollowingNumber = createAction(UPDATE_FOLLOWING_NUMBER, followingNumber => followingNumber);
export const updateFollowerNumber = createAction(UPDATE_FOLLOWER_NUMBER, followerNumber => followerNumber);
export const updatePosts = createAction(UPDATE_POSTS, userPosts => userPosts);
export const updateLikesPosts = createAction(UPDATE_LIKES_POSTS, userLikesPosts => userLikesPosts);

const initialState = {
  // 상태는 GET 요청을 보내서 유저 DB를 통해 받아오게 수정할 예정
  isfollowing: false,
  following: 0,
  follower: 0,
  userPosts: [
    
  ],
  userLikesPosts: [
    
  ],
};

const profile = handleActions(
  {
    [FOLLOW]: (state, action) => ({
      ...state,
      follower: state.follower + 1,
      isfollowing: !state.isfollowing,      
    }),
    [UNFOLLOW]: (state, action) => ({
      ...state,
      follower: state.follower - 1,
      isfollowing: !state.isfollowing,
    }),
    [CHECK_FOLLOW]: (state, {payload: isfollowing}) => ({
      ...state,
      isfollowing: isfollowing,
    }),
    [UPDATE_FOLLOWING_NUMBER]: (state, {payload: followingNumber}) => ({
      ...state,
      following: followingNumber,
    }),
    [UPDATE_FOLLOWER_NUMBER]: (state, {payload: followerNumber}) => ({
      ...state,
      follower: followerNumber,
    }),
    [UPDATE_POSTS]: (state, {payload: userPosts}) => ({
      ...state,
      userPosts: userPosts,
    }),
    [UPDATE_LIKES_POSTS]: (state, {payload: userLikesPosts}) => ({
      ...state,
      userLikesPosts: userLikesPosts,
    }),
  },
  initialState,
);

export default profile;