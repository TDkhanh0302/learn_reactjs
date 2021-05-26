import { register } from 'features/Auth/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (value) => {
    try {
      value.username = value.email;

      const action = register(value);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      alert('Đăng ký tài khoản thành công. Bây giờ bạn có thể đăng nhập');
      console.log('new user', user);
    } catch (error) {
      console.log('Fail to register:', error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
