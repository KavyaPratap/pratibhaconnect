import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import styles from './LandingPage.module.css';
import { Icon } from '@iconify/react';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <header className={styles.heroSection}>
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
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Connect. Discover. Grow.</h1>
            <p className={styles.subheadline}>
              Unlock a world of shared interests and meaningful connections with students and young professionals.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/signup" className={styles.primaryButton}>Get Started - It's Free</Link>
              <Link to="/learn-more" className={styles.secondaryButton}>Explore More</Link>
            </div>
          </div>
          {/* Hero Image Removed */}
        </div>
      </header>

      <main>
        <section id="features" className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2>Empowering Connections Through Key Features</h2>
            <p className={styles.sectionSubheadline}>Experience the power of focused networking and community building.</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Icon icon="material-symbols:link" />
              </div>
              <h3>Interest-Based Matching</h3>
              <p>Find your tribe by connecting with individuals who share your specific hobbies, academic pursuits, and career aspirations.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Icon icon="mdi:chat-processing-outline" />
              </div>
              <h3>Dynamic Forums & Groups</h3>
              <p>Engage in lively discussions, exchange ideas, and collaborate on exciting projects within dedicated community spaces.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Icon icon="material-symbols:person-outline" />
              </div>
              <h3>Rich Personal Profiles</h3>
              <p>Craft a compelling profile that highlights your unique interests and allows others to connect with you on a deeper level.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Icon icon="mdi:share-variant-outline" />
              </div>
              <h3>Expand Your Network</h3>
              <p>Break out of your usual circles and discover a diverse range of perspectives and opportunities.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Icon icon="mdi:lightbulb-outline" />
              </div>
              <h3>Share & Learn Together</h3>
              <p>Pool your knowledge and insights, fostering a collaborative environment for mutual growth and learning.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Icon icon="mdi:handshake-outline" />
              </div>
              <h3>Build Lasting Relationships</h3>
              <p>Forge genuine connections that can evolve into valuable friendships, collaborations, and mentorships.</p>
            </div>
          </div>
        </section>

        <section id="community" className={styles.communitySection}>
          <div className={styles.sectionHeader}>
            <h2>Explore Our Thriving Communities</h2>
            <p className={styles.sectionSubheadline}>Dive into specialized groups and connect with like-minded individuals.</p>
          </div>
          <div className={styles.communityGrid}>
            <div className={styles.communityCard}>
              {/* Community Image Removed */}
              <div>
                <h3>Study Groups</h3>
                <p>Connect with classmates for focused study sessions and collaborative learning.</p>
                <Link to="/communities/study" className={styles.communityLink}>Explore</Link>
              </div>
            </div>
            <div className={styles.communityCard}>
              {/* Community Image Removed */}
              <div>
                <h3>Tech Enthusiasts</h3>
                <p>Discuss the latest technological trends, innovative projects, and the future of tech.</p>
                <Link to="/communities/tech" className={styles.communityLink}>Explore</Link>
              </div>
            </div>
            <div className={styles.communityCard}>
              {/* Community Image Removed */}
              <div>
                <h3>Creative Corner</h3>
                <p>Share your artistic expressions, writing, music, and connect with fellow creatives.</p>
                <Link to="/communities/creative" className={styles.communityLink}>Explore</Link>
              </div>
            </div>
            {/* Add more community cards as needed */}
          </div>
        </section>

        {/* Optional: Testimonials Section */}
        {/* ... */}

        <section id="cta" className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Connect and Grow?</h2>
            <p className={styles.ctaSubheadline}>Join Peer Connect KP today and start building meaningful relationships.</p>
            <Link to="/signup" className={styles.ctaButton}>Sign Up for Free</Link>
          </div>
        </section>
        <hr className={styles.hrnav}/>
      </main>
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

export default LandingPage;