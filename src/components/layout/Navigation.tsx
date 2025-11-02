import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Team', path: '/team' },
  { label: 'Publications', path: '/publications' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
];

const Navigation: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
        Research Lab
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item.label} onClick={() => handleNavigate(item.path)}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <AppBar
          position="static"
          color="primary"
          elevation={2}
          sx={{
            bgcolor: 'primary.main',
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          }}
        >
          <Toolbar>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    mr: 2,
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
                  Menu
                </Typography>
              </>
            ) : (
              <>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleNavigate(item.path)}
                    sx={{
                      mr: 2,
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                      },
                      '&:active': {
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </>
            )}
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
