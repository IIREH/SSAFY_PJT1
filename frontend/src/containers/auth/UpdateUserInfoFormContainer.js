import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import UpdateUserInfoForm from '../../components/auth/UpdateUserInfoForm';
import { changeField, initializeForm, updateUserInfo } from "../../modules/auth";

const UpdateUserInfoFormContainer = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.updateUserInfo,
    auth: auth.auth,
    authError: auth.authError,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'updateUserInfo',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { nickname, password, passwordConfirm } = form;
    const jwt = localStorage.getItem('jwt');
    
    // 비밀번호가 일치하지 않는다면
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      return;
    }
    dispatch(updateUserInfo({ jwt, nickname, password }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 초기화
  useEffect(() => {
    dispatch(initializeForm('updateUserInfo'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      // 닉네임이 이미 존재할 경우
      if (authError.response.status === 409) {
        setError('이미 존재하는 닉네임 입니다.');
        return;
      }
      // 기타 이유
      setError('회원정보 수정 실패');
      return;
    }
  }, [auth, authError])

  return (
    <UpdateUserInfoForm 
      type="updateUserInfo"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default UpdateUserInfoFormContainer;