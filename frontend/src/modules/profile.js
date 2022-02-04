import { createAction, handleActions } from "redux-actions";

const FOLLOW = 'profile/FOLLOW';
const UNFOLLOW = 'profile/UNFOLLOW';

export const follow = createAction(FOLLOW);
export const unfollow = createAction(UNFOLLOW);

const initialState = {
  // 상태는 GET 요청을 보내서 유저 DB를 통해 받아오게 수정할 예정
  isfollowing: false,
  following: 0,
  follower: 0,
  userPosts: [
    {
      id: 1,
      title: '제목',
      content: '내용',
    },
    {
      id: 2,
      title: '제목2',
      content: '내용2',
    }
  ],
  userLikesPosts: [
    {
      id: 3,
      title: '좋아한 제목',
      content: '좋아한 내용',
    }
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
  },
  initialState,
);

export default profile;