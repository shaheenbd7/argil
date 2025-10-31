import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Divider,
  Chip,
  Container,
  Paper,
  Stack,
  Theme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BusinessCenter,
  Groups,
  TrendingUp,
  Public,
  School,
  LocationOn,
  Email,
  Phone,
  LinkedIn,
  Twitter,
  GitHub,
} from '@mui/icons-material';
import { mockOrganization } from '../mock-data';

const images = [
  '/samples/sample-research-photo-1.jpg',
  '/samples/sample-research-photo-2.jpg',
  '/samples/sample-research-project.jpg',
];

const AboutPage: React.FC = () => {
  // Scroll-triggered animation hook
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const achievements = [
    {
      year: '2024',
      title: 'NSF Grant Awarded',
      description: '$2.5M for sustainable cement research transition to low-emission alternatives'
    },
    {
      year: '2023',
      title: 'International Recognition',
      description: 'Published groundbreaking research on urban heat island mitigation'
    },
    {
      year: '2022',
      title: 'DOE Partnership',
      description: '$1.8M grant for environmental sustainability studies'
    },
    {
      year: '2021',
      title: 'Startup Satellite',
      description: 'Established dedicated research facility for advanced materials testing'
    },
  ];

  const values = [
    {
      icon: <Public />,
      title: 'Sustainability',
      description: 'Committed to developing solutions for environmental challenges and promoting sustainable practices'
    },
    {
      icon: <TrendingUp />,
      title: 'Innovation',
      description: 'Pushing the boundaries of materials science and environmental technology'
    },
    {
      icon: <Groups />,
      title: 'Collaboration',
      description: 'Working together with researchers, industry partners, and community stakeholders'
    },
    {
      icon: <BusinessCenter />,
      title: 'Impact',
      description: 'Creating real-world solutions that address pressing environmental and technological challenges'
    },
  ];

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
    <Container maxWidth="lg">
      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ position: 'relative', marginBottom: '4rem', overflow: 'hidden', borderRadius: '16px' }}
      >
        <Box
          component="img"
          src={images[2]}
          alt="Research Lab"
          sx={{
            width: '100%',
            height: { xs: '400px', md: '600px' },
            objectFit: 'cover',
            filter: 'brightness(0.4)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              About {mockOrganization.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                opacity: 0.9,
              }}
            >
              Leading the frontier of sustainable research and environmental innovation
            </Typography>
          </motion.div>
        </Box>
      </motion.div>

      {/* Organization Overview */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Paper elevation={2} sx={{ p: 4, height: '100%', borderRadius: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <School sx={{ color: 'primary.main', fontSize: '2rem' }} />
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Founded in {mockOrganization.founded}, {mockOrganization.name} emerged from a fundamental question: How can we create sustainable technologies that benefit both our planet and humanity?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We started as a small research initiative and have grown into a comprehensive research organization dedicated to solving some of the world's most pressing environmental challenges through cutting-edge materials science and innovative engineering solutions.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Paper elevation={2} sx={{ p: 4, height: '100%', borderRadius: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <BusinessCenter sx={{ color: 'secondary.main', fontSize: '2rem' }} />
                Our Approach
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                We combine rigorous scientific research with practical engineering solutions, bridging the gap between laboratory discoveries and real-world applications.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip label="Interdisciplinary Research" variant="outlined" color="primary" />
                <Chip label="Sustainable Innovation" variant="outlined" color="secondary" />
                <Chip label="Industry Collaboration" variant="outlined" color="info" />
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>

      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <Card elevation={2} sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <CardContent sx={{ p: 5 }}>
            <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 3 }}>
              Our Mission
            </Typography>
            <Typography variant="h6" align="center" sx={{ fontSize: '1.3rem', maxWidth: 800, mx: 'auto', opacity: 0.95, lineHeight: 1.6 }}>
              {mockOrganization.mission}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>

      {/* Image Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ marginBottom: '4rem' }}
      >
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Our Research in Images
        </Typography>
        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card elevation={3} sx={{ overflow: 'hidden', borderRadius: 3 }}>
                  <Box
                    component="img"
                    src={image}
                    alt={`Research Image ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: 250,
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                  <CardContent sx={{ p: 2 }}>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Research Facility {index + 1}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Values */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ marginBottom: '4rem' }}
      >
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Core Values
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <motion.div
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card elevation={1} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                  <CardContent>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 64,
                        height: 64,
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {value.icon}
                    </Avatar>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* History Timeline */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Our Journey
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Key milestones in our research organization's development
        </Typography>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '2rem',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              }}
            >
              {/* Timeline connector */}
              <Box
                sx={{
                  width: 2,
                  backgroundColor: 'primary.main',
                  height: '100%',
                  position: 'relative',
                  mr: 3,
                  ml: index % 2 === 0 ? 0 : 3,
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    border: '4px solid white',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  }}
                />
                {/* Animated pulse */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    border: '4px solid white',
                  }}
                />
              </Box>

              {/* Timeline content */}
              <Card
                elevation={2}
                sx={{
                  flex: 1,
                  maxWidth: 400,
                  transform: index % 2 === 0 ? 'none' : 'translateX(32px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {achievement.year}
                  </Typography>
                  <Typography variant="subtitle1" component="h4" gutterBottom>
                    {achievement.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          {/* Final connector line */}
          <Box
            sx={{
              width: 2,
              height: '2rem',
              backgroundColor: 'primary.main',
              margin: '0 auto',
            }}
          />
        </Box>
      </motion.div>

      {/* Founded Year */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        style={{ marginBottom: '4rem', textAlign: 'center' }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Established in {mockOrganization.founded}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Over the years, we've grown from a small research initiative into a leading force in sustainable research and environmental innovation.
        </Typography>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <Card
          elevation={3}
          sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'left 0.5s',
            },
            '&:hover::before': {
              left: '100%',
            },
          }}
        >
          <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Get In Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Interested in collaborating or learning more about our research?
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'secondary.main',
                color: 'secondary.contrastText',
                '&:hover': {
                  bgcolor: 'secondary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                },
                transition: 'all 0.3s ease',
              }}
              href={`mailto:${mockOrganization.contactEmail}`}
            >
              Contact Us Today
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};

export default AboutPage;
