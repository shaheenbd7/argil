import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn } from '@mui/icons-material';
import teamMembersData from '../resources/team-members.json';
import { mockProjects } from '../mock-data';
import { getImageSrc } from '../utils/imageUtils';

const TeamPage: React.FC = () => {
  const getProjectCount = (researcherId: string) => {
    return mockProjects.filter(project => project.researchers.includes(researcherId)).length;
  };

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Our Research Team
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6 }}>
          Meet the brilliant minds driving innovation in sustainable research
        </Typography>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Grid container spacing={4}>
          {teamMembersData.map((researcher, index) => (
            <Grid item xs={12} md={6} lg={4} key={researcher.id}>
              <motion.div variants={item} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card elevation={3} sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center', pb: 3 }}>
                    <Avatar
                      src={getImageSrc(researcher.photoUrl)}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 3,
                        border: 4,
                        borderColor: 'primary.light',
                      }}
                    />
                    <Typography variant="h5" component="h2" gutterBottom>
                      {researcher.name}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                      {researcher.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, minHeight: 80 }}>
                      {researcher.bio}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      {researcher.specialties.slice(0, 3).map((specialty) => (
                        <Chip
                          key={specialty}
                          label={specialty}
                          size="small"
                          sx={{ mr: 0.5, mb: 0.5 }}
                          variant="outlined"
                          color="secondary"
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
                      <Typography variant="body2" color="text.secondary">
                        {getProjectCount(researcher.id)} Active Projects
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                      <Button
                        startIcon={<Email />}
                        variant="outlined"
                        size="small"
                        href={`mailto:${researcher.email}`}
                      >
                        Email
                      </Button>
                      <Button
                        startIcon={<LinkedIn />}
                        variant="outlined"
                        size="small"
                      >
                        LinkedIn
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default TeamPage;
