import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
<<<<<<< HEAD
import { takeLatest } from 'redux-saga/effects';
=======
import { call, takeLatest } from 'redux-saga/effects';
>>>>>>> develop
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER'
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN'
);

<<<<<<< HEAD
=======
const [UPDATE_USER_INFO, UPDATE_USER_INFO_SUCCESS, UPDATE_USER_INFO_FAILURE] = createRequestActionTypes(
  'auth/UPDATE_USER_INFO'
);

>>>>>>> develop
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // username, password, passwordConfirm
    value // 실제 바꾸려는 값
  })
);
<<<<<<< HEAD
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const register = createAction(REGISTER, ({ username, password }) => ({
  username,
  password
}));
export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
=======
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login / updateUserInfo
export const register = createAction(REGISTER, ({ email, username, nickname, password }) => ({
  email,
  username,
  nickname,
  password
}));
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password
}));
export const updateUserInfo = createAction(UPDATE_USER_INFO, ({ id, nickname, password }) => ({
  id,
  nickname,
>>>>>>> develop
  password
}));

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
<<<<<<< HEAD
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
=======
const updateUserInfoSaga = createRequestSaga(UPDATE_USER_INFO, authAPI.updateUserInfo);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(UPDATE_USER_INFO, updateUserInfoSaga);
>>>>>>> develop
}

const initialState = {
  register: {
<<<<<<< HEAD
    username: '',
=======
    email: '',
    username: '',
    nickname: '',
>>>>>>> develop
    password: '',
    passwordConfirm: ''
  },
  login: {
<<<<<<< HEAD
    username: '',
    password: ''
  },
=======
    email: '',
    password: ''
  },
  updateUserInfo: {
    nickname: '',
    password: '',
    passwordConfirm: ''
  },
>>>>>>> develop
  auth: null,
  authError: null
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
<<<<<<< HEAD
    })
=======
    }),
    [UPDATE_USER_INFO_SUCCESS]: (state, { payload: auth}) => ({
      ...state,
      authError: null,
      auth
    }),
    [UPDATE_USER_INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
>>>>>>> develop
  },
  initialState
);

export default auth;
