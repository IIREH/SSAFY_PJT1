import client from './client';

// 로그인
export const login = ({ id, password }) =>
  client.get('/api/user/login', { id, pwd: password });

// 회원가입
export const register = ({ email, id, username, nickname, password }) =>
  client.post('/api/user/register', 
    { 
      email, 
      id, 
      name: username, 
      nickName: nickname, 
      pwd: password 
    }
  );

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');

// 회원탈퇴
export const deleteUserInfo = id => client.delete(`/api/user/unregister/${id}`);

// 회원 정보 수정
export const updateUserInfo = ({ id, nickname, password }) =>
  client.patch(`/api/auth/update/${id}`, { nickname, password });

// 카카오 로그인
// KaKao.Auth.authorize(PARAMETER);