import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  Divider,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email,
  Phone,
  LocationOn,
  Facebook,
  Twitter,
  LinkedIn,
} from '@mui/icons-material';
import { mockOrganization } from '../../mock-data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: 1,
        borderColor: 'divider',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Grid container spacing={4} justifyContent="space-between">
            {/* Organization Info */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Typography variant="h6" color="primary" gutterBottom>
                  {mockOrganization.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {mockOrganization.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Founded in {mockOrganization.founded}
                </Typography>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={3}>
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Quick Links
                </Typography>
                <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Research', 'Team', 'Publications', 'Gallery', 'About'].map((link) => (
                    <Link
                      key={link}
                      href={`/${link.toLowerCase()}`}
                      color="text.secondary"
                      sx={{
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email color="primary" fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                      {mockOrganization.contactEmail}
                    </Typography>
                  </Box>
                  {mockOrganization.phone && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Phone color="primary" fontSize="small" />
                      <Typography variant="body2" color="text.secondary">
                        {mockOrganization.phone}
                      </Typography>
                    </Box>
                  )}
                  {mockOrganization.address && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOn color="primary" fontSize="small" />
                      <Typography variant="body2" color="text.secondary">
                        {mockOrganization.address}
                      </Typography>
                    </Box>
                  )}
                </Box>

                {/* Social Icons */}
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <IconButton
                    size="small"
                    color="primary"
                    aria-label="Facebook"
                    sx={{ '&:hover': { bgcolor: 'primary.main', color: 'white' } }}
                  >
                    <Facebook />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    aria-label="Twitter"
                    sx={{ '&:hover': { bgcolor: 'primary.main', color: 'white' } }}
                  >
                    <Twitter />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    aria-label="LinkedIn"
                    sx={{ '&:hover': { bgcolor: 'primary.main', color: 'white' } }}
                  >
                    <LinkedIn />
                  </IconButton>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Copyright */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Typography variant="body2" color="text.secondary" align="center">
                © {currentYear} {mockOrganization.name}. All rights reserved.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
