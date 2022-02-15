import { createAction, handleActions } from "redux-actions";

const CHANGE_KEYWORD = 'search/CHANGE_KEYWORD';
const SEARCH_CONTEST = 'search/SEARCH_CONTEST';
const SEARCH_USER = 'search/SEARCH_USERS';
const RESET_STATE = 'search/RESET_STATE';

export const changeKeyword = createAction(CHANGE_KEYWORD, keyword => keyword);
export const searchContest = createAction(SEARCH_CONTEST, searchContests => searchContests);
export const searchUser = createAction(SEARCH_USER, searchUsers => searchUsers);
export const resetState = createAction(RESET_STATE);

const initialState = {
  searchContests: [],
  searchUsers: [],
  keyword: '',
};

const search = handleActions(
  {
    [CHANGE_KEYWORD]: (state, { payload: keyword }) => ({
      ...state,
      keyword: keyword,
    }),
    [SEARCH_CONTEST]: (state, { payload: searchContests }) => ({
      ...state,
      searchContests: searchContests
    }),
    [SEARCH_USER]: (state, { payload: searchUsers }) => ({
      ...state,
      searchUsers: searchUsers,
    }),
    [RESET_STATE]: (state, action) => ({
      searchContests: [],
      searchUsers: [],
      keyword: '',
    })
  },
  initialState
);

export default search;