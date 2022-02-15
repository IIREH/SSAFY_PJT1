import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { deleteUserInfo, checkUser } from '../../modules/user';
import client from '../../lib/api/client';

const HeaderContainer = () => {
  const jwt = localStorage.getItem('jwt')

  useEffect((jwt) => {
    if (jwt) {
      client.get(`/api/user/nickName?jwt=${jwt}`)
        .then(res => {
          const userNickname = res.data.response;
          dispatch(checkUser(userNickname));
        })
        .catch(e => {
          console.log(e)
        })
    }
  });

  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const dispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
    localStorage.removeItem('userEmail');
    window.location.reload();
  };

  const onDelete = () => {
    dispatch(deleteUserInfo());
    localStorage.removeItem('user');

    client.delete(`/api/user?jwt=${jwt}`)
      .then(res => {
        console.log(res)
      })
      .catch(e => {
        console.log(e);
      })
    localStorage.removeItem('jwt');
  }
  return <Header user={user} onLogout={onLogout} onDelete={onDelete}/>;
};

export default HeaderContainer;
