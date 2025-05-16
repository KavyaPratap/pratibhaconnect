import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainLayout.module.css'; // We'll create this CSS module

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
          <div className={styles.logo}>Peer Connect KP</div>
          <ul className={styles.navLinks}>
            <li><Link to="/" className={styles.navItem}>Home</Link></li>
            <li><Link to="/features" className={styles.navItem}>Features</Link></li>
            <li><Link to="/community" className={styles.navItem}>Community</Link></li>
            <li><Link to="/contact" className={styles.navItem}>Contact</Link></li>
          </ul>
          <div className={styles.authLinks}>
            <Link to="/signin" className={styles.signInButton}>Sign In</Link>
            <Link to="/signup" className={styles.signUpButton}>Sign Up</Link>
          </div>
          <div className={styles.hamburger}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
        <hr className={styles.hrnav}/>
      <main className={styles.mainContent}>
        {children}
      </main>
      <hr className={styles.hrnav}/>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>Peer Connect KP</div>
          <ul className={styles.footerLinks}>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Peer Connect KP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;