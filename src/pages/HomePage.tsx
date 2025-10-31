import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Avatar,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Science,
  People,
  LibraryBooks,
  TrendingUp,
} from '@mui/icons-material';
import { mockOrganization, mockProjects, mockResearchers } from '../mock-data';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const featuredProjects = mockProjects.slice(0, 2);
  const featuredResearchers = mockResearchers.slice(0, 3);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Box>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            py: 8,
            mb: 6,
            borderRadius: 2,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom align="center">
            {mockOrganization.name}
          </Typography>
          <Typography variant="h5" align="center" sx={{ mb: 4 }}>
            {mockOrganization.description}
          </Typography>
          <Typography variant="body1" align="center" sx={{ maxWidth: 800, mx: 'auto' }}>
            {mockOrganization.mission}
          </Typography>
        </Box>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[
            { icon: <Science />, label: 'Active Projects', value: mockProjects.length },
            { icon: <People />, label: 'Research Team', value: mockResearchers.length },
            { icon: <LibraryBooks />, label: 'Publications', value: '15+' },
            { icon: <TrendingUp />, label: 'Impact Factor', value: '4.2' },
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div variants={item}>
                <Card elevation={2} sx={{ textAlign: 'center', height: '100%' }}>
                  <CardContent>
                    <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                      {stat.icon}
                    </Avatar>
                    <Typography variant="h4" color="primary">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Typography variant="h3" component="h2" gutterBottom>
          Featured Research Projects
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {featuredProjects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card elevation={3}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.mediaUrls.length > 0 ? 'https://via.placeholder.com/400x200?text=Research+Project' : 'https://via.placeholder.com/400x200?text=Project+Image'}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{ mr: 0.5, mb: 0.5 }}
                          variant="outlined"
                        />
                      ))}
                    </Box>
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
                      {project.funding}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/research')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            component={motion.div}
          >
            View All Projects
          </Button>
        </Box>
      </motion.div>

      {/* Team Preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Typography variant="h3" component="h2" gutterBottom>
          Our Research Team
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Meet our dedicated team of researchers and scientists driving innovation.
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {featuredResearchers.map((researcher) => (
            <Grid item xs={12} md={4} key={researcher.id}>
              <motion.div whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card elevation={2}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar
                      src={researcher.photoUrl}
                      sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                    />
                    <Typography variant="h6" gutterBottom>
                      {researcher.name}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
                      {researcher.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {researcher.bio.length > 100
                        ? `${researcher.bio.substring(0, 100)}...`
                        : researcher.bio}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      {researcher.specialties.slice(0, 2).map((specialty) => (
                        <Chip
                          key={specialty}
                          label={specialty}
                          size="small"
                          sx={{ mr: 0.5 }}
                          variant="outlined"
                          color="secondary"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/team')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            component={motion.div}
          >
            Meet the Full Team
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HomePage;
