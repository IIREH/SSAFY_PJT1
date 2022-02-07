import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
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

const [UPDATE_USER_INFO, UPDATE_USER_INFO_SUCCESS, UPDATE_USER_INFO_FAILURE] = createRequestActionTypes(
  'auth/UPDATE_USER_INFO'
);

const JWT = 'auth/JWT';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // username, password, passwordConfirm
    value // 실제 바꾸려는 값
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login / updateUserInfo
export const register = createAction(REGISTER, ({ email, nickname, password }) => ({
  email,
  nickname,
  password
}));
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password
}));
export const updateUserInfo = createAction(UPDATE_USER_INFO, ({ nickname, password }) => ({
  nickname,
  password
}));
export const jwt = createAction(JWT, jwt => jwt);

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const updateUserInfoSaga = createRequestSaga(UPDATE_USER_INFO, authAPI.updateUserInfo);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(UPDATE_USER_INFO, updateUserInfoSaga);
}

const initialState = {
  register: {
    email: '',
    nickname: '',
    password: '',
    passwordConfirm: ''
  },
  login: {
    email: '',
    password: ''
  },
  updateUserInfo: {
    nickname: '',
    password: '',
    passwordConfirm: ''
  },
  auth: null,
  authError: null,
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
    [JWT]: (state, { payload: jwt }) => ({
      ...state,
      jwt,
    }),
  },
  initialState
);

export default auth;
