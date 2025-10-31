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
        }}
      >
        <Box sx={{ bgcolor: 'background.paper' }}>
          <Tabs
            value={getActiveTab()}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            sx={{
              '& .MuiTab-root': {
                minHeight: 64,
                '&:hover': {
                  bgcolor: 'action.hover',
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
                  '& .MuiTab-iconWrapper': {
                    order: { xs: 2, md: 0 },
                  },
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease',
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
