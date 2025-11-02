import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Paper,
  Tabs,
  Tab,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Home,
  Science,
  People,
  LibraryBooks,
  PhotoLibrary,
  Info,
} from '@mui/icons-material';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return 0;
      case '/research':
        return 1;
      case '/team':
        return 2;
      case '/publications':
        return 3;
      case '/gallery':
        return 4;
      case '/about':
        return 5;
      default:
        return 0;
    }
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    const routes = ['/', '/research', '/team', '/publications', '/gallery', '/about'];
    console.log('Navigating to:', routes[newValue]);
    navigate(routes[newValue]);
  };

  const tabs = [
    { label: 'Home', icon: <Home /> },
    { label: 'Research', icon: <Science /> },
    { label: 'Team', icon: <People /> },
    { label: 'Publications', icon: <LibraryBooks /> },
    { label: 'Gallery', icon: <PhotoLibrary /> },
    { label: 'About', icon: <Info /> },
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <Paper
        elevation={2}
        sx={{
          borderRadius: 0,
          position: 'sticky',
          top: 0,
          zIndex: 1100,
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        }}
      >
        <Box sx={{
          bgcolor: 'transparent',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(248, 250, 252, 0.1) 100%)',
        }}>
          <Tabs
            value={getActiveTab()}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            sx={{
              '& .MuiTab-root': {
                minHeight: 64,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(66, 165, 245, 0.1) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  borderRadius: '8px',
                },
                '&:hover::before': {
                  opacity: 1,
                },
                '&:hover': {
                  bgcolor: 'transparent',
                  color: 'primary.main',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
                },
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={tab.label}
                icon={tab.icon}
                label={tab.label}
                iconPosition="start"
                sx={{
                  display: { xs: 'block', md: 'inherit' },
                  flexDirection: 'row',
                  gap: 1,
                  position: 'relative',
                  zIndex: 1,
                  '& .MuiTab-iconWrapper': {
                    order: { xs: 2, md: 0 },
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover .MuiTab-iconWrapper': {
                    transform: 'scale(1.1)',
                  },
                  '&:hover': {
                    color: 'primary.dark',
                    transform: 'translateY(-2px) scale(1.02)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Navigation;
