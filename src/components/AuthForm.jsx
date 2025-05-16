import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from '../components/Auth/AuthForm.module.css';
import clsx from 'clsx';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggle = () => {
    setIsSignUp((prev) => !prev);
    setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  if (isMobile) {
    return (
      <div className={styles.mobileContainer}>
        <div className={styles.mobileFormWrapper}>
          {/* SIGN IN FORM */}
          <form
            className={`${styles.mobileForm} ${!isSignUp ? styles.active : styles.inactive}`}
            onSubmit={handleSubmit}
          >
            <h2 className={styles.title}>Sign In</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
              
            />
            
            {errorMsg && !isSignUp && <p className={styles.error}>{errorMsg}</p>}
            <button type="submit" className={styles.button}>Sign In</button>
            <button type="button" className={styles.toggleLink} onClick={toggle}>
              Don’t have an account? Sign Up
            </button>
          </form>

          {/* SIGN UP FORM */}
          <form
            className={`${styles.mobileForm} ${isSignUp ? styles.active : styles.inactive}`}
            onSubmit={handleSubmit}
          >
            <h2 className={styles.title}>Create Account</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
            {errorMsg && isSignUp && <p className={styles.error}>{errorMsg}</p>}
            <button type="submit" className={styles.button}>Sign Up</button>
            <button type="button" className={styles.toggleLink} onClick={toggle}>
              Already have an account? Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div
        id="container"
        className={`${styles.authBox} ${isSignUp ? styles.containerRightPanelActive : ''}`}
      >
        {/* SIGN UP FORM */}
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.title}>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
            {errorMsg && isSignUp && <p className={styles.error}>{errorMsg}</p>}
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
          </form>
        </div>

        {/* SIGN IN FORM */}
        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.title}>Sign In</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
            <a href="#" className={styles.anchor}>
              Forgot your password?
            </a>
            {errorMsg && !isSignUp && <p className={styles.error}>{errorMsg}</p>}
            <button type="submit" className={styles.button}>
              Sign In
            </button>
          </form>
        </div>

        {/* OVERLAY */}
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h1 className={styles.title}>Welcome Back!</h1>
              <p className={styles.paragraph}>
                To keep connected with us please login with your personal info
              </p>
              <button className={styles.ghostButton} onClick={toggle}>
                Sign Up
              </button>
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1 className={styles.title}>Hello, Friend!</h1>
              <p className={styles.paragraph}>
                Enter your personal details and start your journey with us
              </p>
              <button className={styles.ghostButton} onClick={toggle}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default AuthForm;