import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { checkUser } from '../../modules/user';
import client from '../../lib/api/client';

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    // dispatch(login({ username, password }));
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
        const jwt = res.data.response.token;

        client.get(`/api/user/nickName?jwt=${jwt}`)
          .then(res => {
            const userNickname = res.data.response;
            dispatch(checkUser(userNickname));
          })
          .catch(e => {
            setError(`${e.response.data.error.message}`)
          })
      })
      .catch(e => {
        setError(`${e.response.data.error.message}`)
      })
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  // useEffect(() => {
  //   if (authError) {
  //     console.log('오류 발생');
  //     console.log(authError);
  //     setError('로그인 실패');
  //     return;
  //   }
  //   if (auth) {
  //     console.log('로그인 성공');
  //   }
  // }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;
