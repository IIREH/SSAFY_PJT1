import client from './client';

// 로그인
export const login = ({ username, password }) => {
  const params = new URLSearchParams();
  const datas = {
    id: username,
    pwd: password
  };

  Object.keys(datas).forEach((key) => {
    params.append(key, datas[key]);
  });

  client.post('/api/user/login', params)
    .then(res => {
      localStorage.setItem('jwt', res.data.response.token);
      return res.data.response;
    })
    .catch(e => {
      console.log(e.status);
      localStorage.setItem('error', e);
      return e;
    })
}

// 회원가입
export const register = ({ username, nickname, password }) => {
  const params = new URLSearchParams();
  const datas = {
    id: username,
    nickName: nickname,
    pwd: password
  };

  Object.keys(datas).forEach((key) => {
    params.append(key, datas[key]);
  });

  client.post('/api/user', params)
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e);
    })
}

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');

// 로그인 회원 확인
export const checkUser = ({ jwt }) => client.get('/api/user/nickName', { jwt });