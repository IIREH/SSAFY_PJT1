import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { deleteUserInfo, logout } from '../../modules/user';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    dispatch(logout());
    window.location.reload();
  };
  const onDelete = () => {
    dispatch(deleteUserInfo(user));
  }
  return <Header user={user} onLogout={onLogout} onDelete={onDelete}/>;
};

export default HeaderContainer;
