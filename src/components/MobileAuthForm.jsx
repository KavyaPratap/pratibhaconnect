import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Corrected path
import styled from 'styled-components';

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f0f0f0;
`;

const MobileForm = styled.form`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MobileTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
`;

const MobileInput = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const MobileButton = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const MobileLink = styled(Link)`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const MobileAuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
    const [mounted, setMounted] = useState(false); // Add mounted state

    useEffect(() => {
        setMounted(true); // Set mounted to true after initial render
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
        if (!mounted) return;

    setErrorMsg('');
    try {
      if (isSignUp) {
        await signUp(email, password, name);
        navigate('/welcome');
      } else {
        await signIn(email, password);
        navigate('/dashboard');
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <MobileContainer>
      <MobileForm onSubmit={handleSubmit}>
        <MobileTitle>{isSignUp ? 'Create Account' : 'Sign In'}</MobileTitle>
        {isSignUp && (
          <MobileInput
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <MobileInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <MobileInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        <MobileButton type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</MobileButton>
        <MobileLink onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </MobileLink>
      </MobileForm>
    </MobileContainer>
  );
};

export default MobileAuthForm;
