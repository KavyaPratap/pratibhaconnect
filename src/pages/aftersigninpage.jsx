import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';  // Assuming these Shadcn components exist
import { cn } from '@/lib/utils';    // Assuming this utility function exists
import { CheckCircle, Home, Users, MessageCircle, Settings } from 'lucide-react';
import styled from 'styled-components';

// Styled Components
const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(to bottom, #6a11cb, #2575fc); /* Gradient background */
  color: white;
  text-align: center;
`;

const WelcomeCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1); /* Glassmorphism effect */
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  padding: 30px;
  max-width: 80%;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  box-sizing: border-box;
`;

const WelcomeTitle = styled(motion.h1)`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;

const WelcomeText = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #eeeeee;
  line-height: 1.7;
  opacity: 0.9;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const StyledButton = styled(Button)`
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const HomeButton = styled(StyledButton)`
  background: linear-gradient(to right, #4361ee, #80ed99);
  color: white;

  &:hover {
    background: linear-gradient(to right, #4895ef, #72efdd);
  }
`;

const ProfileButton = styled(StyledButton)`
  background: linear-gradient(to right, #f72585, #b5179e);
  color: white;

  &:hover {
    background: linear-gradient(to right, #f72585, #8338ec);
  }
`;

const CommunityButton = styled(StyledButton)`
  background: linear-gradient(to right, #00b4d8, #0083b0);
  color: white;
  &:hover {
    background: linear-gradient(to right, #00c7e5, #005f73);
  }
`;

const SettingsButton = styled(StyledButton)`
  background: linear-gradient(to right, #ffb703, #fb8500);
  color: #333;

  &:hover {
    background: linear-gradient(to right, #ffd100, #f8961e);
  }
`;

const AfterSignInPage = () => {
  const navigate = useNavigate();



  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeInOut', delay: 0.2 },
    },
  };

  // Function to handle navigation
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <WelcomeContainer>
      <WelcomeCard
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <WelcomeTitle
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <CheckCircle className="inline-block w-12 h-12 mr-3 text-green-400 mb-2" />
          Welcome to InShare!
        </WelcomeTitle>
        <WelcomeText>
          Your account has been successfully created.  Get ready to connect with
          people who share your passions and explore a world of communities!
        </WelcomeText>
        <ActionButtons>
          <HomeButton onClick={() => handleNavigation('/')}>
            <Home className="mr-2 h-5 w-5" />
            Go to Home
          </HomeButton>
          <ProfileButton onClick={() => handleNavigation('/profile')}>
            <Users className="mr-2 h-5 w-5" />
            View Your Profile
          </ProfileButton>
          <CommunityButton onClick={() => handleNavigation('/communities')}>
            <MessageCircle className="mr-2 h-5 w-5" />
            Explore Communities
          </CommunityButton>
          <SettingsButton onClick={() => handleNavigation('/settings')}>
            <Settings className="mr-2 h-5 w-5" />
            Account Settings
          </SettingsButton>
        </ActionButtons>
      </WelcomeCard>
    </WelcomeContainer>
  );
};

export default AfterSignInPage;
