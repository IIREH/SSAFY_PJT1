import client from './client';

// 로그인
export const login = ({ email, password }) => {
  var result = null;

  const params = new URLSearchParams();
  const datas = {
    id: email,
    pwd: password
  };

  Object.keys(datas).forEach((key) => {
    params.append(key, datas[key]);
  });

  client.post('/api/user/login', params)
    .then(res => {
      console.log(res.data.response.token)
      localStorage.setItem('jwt', res.data.response.token);
      result = res;
    })
    .catch(e => {
      console.log(e);
      result = e;
    })

  return result;
}  

// 회원가입
export const register = ({ email, nickname, password }) => {
  const params = new URLSearchParams();
  const datas = {
    id: email,
    nickName: nickname,
    pwd: password
  };

  Object.keys(datas).forEach((key) => {
    params.append(key, datas[key]);
  });

  client.post('/api/user', params);
};  

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');

// 회원탈퇴
export const deleteUserInfo = id => client.delete(`/api/user/unregister/${id}`);

// 회원 정보 수정
export const updateUserInfo = ({ jwt, nickname, password }) => {
  const params = new URLSearchParams();
  const datas = {
    jwt, 
    nickName: nickname, 
    pwd: password
  };

  Object.keys(datas).forEach((key) => {
    params.append(key, datas[key]);
  });

  client.put('/api/user', params);
}  

// 카카오 로그인
// KaKao.Auth.authorize(PARAMETER);