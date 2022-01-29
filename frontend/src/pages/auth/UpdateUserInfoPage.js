import React from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import UpdateUserInfoFormContainer from '../../containers/auth/UpdateUserInfoFormContainer';

const UpdateUserInfoPage = () => {
  return (
    <AuthTemplate>
      <UpdateUserInfoFormContainer />
    </AuthTemplate>
  );
};

export default UpdateUserInfoPage;