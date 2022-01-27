import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import UpdateUserInfoForm from '../containers/auth/UpdateUserInfoForm';

const UpdateUserInfoPage = () => {
  return (
    <AuthTemplate>
      <UpdateUserInfoForm />
    </AuthTemplate>
  );
};

export default UpdateUserInfoPage;