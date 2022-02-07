import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import { checkUser } from '../../modules/user';
import AuthForm from '../../components/auth/AuthForm';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
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
    const { email, password } = form;
    dispatch(login({ email, password }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError('로그인 실패');
      return;
    }

    if (auth) {
      const jwt = localStorage.getItem('jwt');

      if (jwt) {
        console.log('로그인 성공');
        const { email } = auth;
        dispatch(checkUser(email));
        navigate('/');
      }      
    }
  }, [auth, authError, dispatch, navigate]);

  // useEffect(() => {
    // const jwt = localStorage.getItem('jwt');
    // if (jwt) {
    //   console.log(auth)
    //   const { email } = auth;
    //   dispatch(checkUser(email));
    //   navigate('/');
      
      // try {
      //   localStorage.setItem('user', JSON.stringify(user));
      // } catch (e) {
      //   console.log('localStorage is not working');
    //   // }
    // }
  // }, [navigate, dispatch, auth]);

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
