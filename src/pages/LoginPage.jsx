import React from 'react';
import AuthForm from '../components/AuthForm';
import MainLayout from '../components/Layout/MainLayout';

const LoginPage = () => {
  return (
    <MainLayout>
      <AuthForm isSignUp={false} />
    </MainLayout>
  );
};

export default LoginPage;