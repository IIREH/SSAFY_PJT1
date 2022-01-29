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
<<<<<<< HEAD
=======
const DELETE_USER_INFO = 'user/DELETE_USER_INFO';
>>>>>>> develop

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);
<<<<<<< HEAD
=======
export const deleteUserInfo = createAction(DELETE_USER_INFO, user => user);
>>>>>>> develop

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

<<<<<<< HEAD
=======
function* deleteUserInfoSaga(user) {
  const id = user.payload._id;
  try {
    console.log(id);
    yield call(authAPI.deleteUserInfo(id));
  } catch (e) {
    console.log(e);
  }
}

>>>>>>> develop
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
<<<<<<< HEAD
=======
  yield takeLatest(DELETE_USER_INFO, deleteUserInfoSaga);
>>>>>>> develop
}

const initialState = {
  user: null,
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
<<<<<<< HEAD
=======
    [DELETE_USER_INFO]: state => ({
      ...state,
      user: null,
    }),
>>>>>>> develop
  },
  initialState,
);
