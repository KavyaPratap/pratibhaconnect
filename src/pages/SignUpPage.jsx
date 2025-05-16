import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import MainLayout from '../components/Layout/MainLayout';

const SignUpPage = () => {
  return (
    <MainLayout>
      <AuthForm isSignUp={true} />
    </MainLayout>
  );
};

export default SignUpPage;