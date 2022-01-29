import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
<<<<<<< HEAD
import { logout } from '../../modules/user';
=======
import { deleteUserInfo, logout } from '../../modules/user';
>>>>>>> develop

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
<<<<<<< HEAD
  return <Header user={user} onLogout={onLogout} />;
=======
  const onDelete = () => {
    dispatch(deleteUserInfo(user));
  }
  return <Header user={user} onLogout={onLogout} onDelete={onDelete}/>;
>>>>>>> develop
};

export default HeaderContainer;
