import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import LoginForm from '../LoginForm';

Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (value) => {
    try {
      const action = login(value);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      history.push('admin');

      console.log('new user', user);
    } catch (error) {
      alert('Sai tài khoản hoặc mật khẩu');
      console.log('Fail to register:', error);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
