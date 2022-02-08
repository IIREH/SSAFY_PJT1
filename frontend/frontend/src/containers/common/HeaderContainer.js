import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { deleteUserInfo } from '../../modules/user';
import client from '../../lib/api/client';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
    window.location.reload();
  };

  const onDelete = () => {
    dispatch(deleteUserInfo());
    localStorage.removeItem('user');
    const jwt = localStorage.getItem('jwt');
    // const params = new URLSearchParams();
    // const datas = {
    //   jwt: jwt,
    // };

    // Object.keys(datas).forEach((key) => {
    //   params.append(key, datas[key]);
    // });

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
