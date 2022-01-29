import client from './client';

// 로그인
<<<<<<< HEAD
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

// 회원가입
export const register = ({ username, password }) =>
  client.post('/api/auth/register', { username, password });
=======
export const login = ({ email, password }) =>
  client.post('/api/auth/login', { email, password });

// 회원가입
export const register = ({ email, username, nickname, password }) =>
  client.post('/api/auth/register', { email, username, nickname, password });
>>>>>>> develop

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');
<<<<<<< HEAD
=======

// 회원탈퇴
export const deleteUserInfo = id => client.delete(`/api/auth/remove/${id}`);

// 회원 정보 수정
export const updateUserInfo = ({ id, nickname, password }) =>
  client.patch(`/api/auth/update/${id}`, { nickname, password });

// 카카오 로그인
// KaKao.Auth.authorize(PARAMETER);
>>>>>>> develop
