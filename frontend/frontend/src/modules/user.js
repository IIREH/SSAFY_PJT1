import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
// 회원 정보 확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  'user/CHECK',
);
const LOGOUT = 'user/LOGOUT';
const CHECK_USER = 'user/CHECK_USER';
const DELETE_USER_INFO = 'user/DELETE_USER_INFO';
const SET_USER_EMAIL = 'user/SET_USER_EMAIL';

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);
export const checkUser = createAction(CHECK_USER, userNickname => userNickname);
export const deleteUserInfo = createAction(DELETE_USER_INFO);
export const setUserEmail = createAction(SET_USER_EMAIL, userEmail => userEmail);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem('user'); // localStorage 에서 user 제거하고
  } catch (e) {
    console.log('localStorage is not working');
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout); // logout API 호출
    localStorage.removeItem('user'); // localStorage 에서 user 제거
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  userEmail: '',
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: state => ({
      ...state,
      user: null,
    }),
    [CHECK_USER]: (state, { payload: userNickname }) => ({
      ...state,
      user: userNickname,
    }),
    [DELETE_USER_INFO]: state => ({
      ...state,
      user: null,
    }),
    [SET_USER_EMAIL]: (staet, { payload: userEmail }) => ({
      ...staet,
      userEmail: userEmail,
    })
  },
  initialState,
);
