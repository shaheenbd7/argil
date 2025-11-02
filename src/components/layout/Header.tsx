import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { Science } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <motion.div
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <IconButton
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <Science />
            </IconButton>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              Argil Research Institute
            </Typography>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
