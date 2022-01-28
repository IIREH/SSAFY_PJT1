import client from './client';

// 로그인
export const login = ({ email, password }) =>
  client.post('/api/auth/login', { email, password });

// 회원가입
export const register = ({ email, username, nickname, password }) =>
  client.post('/api/auth/register', { email, username, nickname, password });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');

// 회원탈퇴
export const deleteUserInfo = id => client.delete(`/api/auth/remove/${id}`);

// 회원 정보 수정
export const updateUserInfo = ({ id, nickname, password }) =>
  client.patch(`/api/auth/update/${id}`, { nickname, password });

// 카카오 로그인
// KaKao.Auth.authorize(PARAMETER);