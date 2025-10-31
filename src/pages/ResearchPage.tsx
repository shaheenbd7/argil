import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Avatar,
  Button,
  Collapse,
  IconButton,
  Tabs,
  Tab,
} from '@mui/material';
import { motion } from 'framer-motion';
import { ExpandMore, ExpandLess, DateRange, MonetizationOn } from '@mui/icons-material';
import { mockProjects, mockResearchers } from '../mock-data';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

const ResearchPage: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [tabValue, setTabValue] = useState(0);

  const handleExpandClick = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const getResearcherById = (id: string) =>
    mockResearchers.find(researcher => researcher.id === id);

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Research Projects
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Discovering innovative solutions to complex environmental and technological challenges
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="project filter tabs">
            <Tab label={`All Projects (${mockProjects.length})`} />
            <Tab label="Active" />
            <Tab label="Completed" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={4}>
            {mockProjects.map((project, index) => (
              <Grid item xs={12} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  style={{ height: '100%' }}
                >
                  <Card elevation={2}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h5" component="h2" gutterBottom>
                            {project.title}
                          </Typography>
                          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                            {project.description}
                          </Typography>

                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                            {project.tags.map((tag) => (
                              <Chip
                                key={tag}
                                label={tag}
                                size="small"
                                variant="outlined"
                                color="primary"
                              />
                            ))}
                          </Box>

                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <DateRange color="action" fontSize="small" />
                              <Typography variant="body2" color="text.secondary">
                                {new Date(project.startDate).toLocaleDateString()} - {project.endDate ? new Date(project.endDate).toLocaleDateString() : 'Present'}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <MonetizationOn color="action" fontSize="small" />
                              <Typography variant="body2" color="primary" fontWeight="bold">
                                {project.funding}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ml: 2 }}>
                          <IconButton
                            onClick={() => handleExpandClick(project.id)}
                            aria-expanded={expandedProject === project.id}
                            aria-label="show more"
                          >
                            {expandedProject === project.id ? <ExpandLess /> : <ExpandMore />}
                          </IconButton>
                        </Box>
                      </Box>

                      <Collapse in={expandedProject === project.id} timeout="auto" unmountOnExit>
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            Research Team
                          </Typography>
                          <Grid container spacing={2}>
                            {project.researchers.map((researcherId) => {
                              const researcher = getResearcherById(researcherId);
                              return researcher ? (
                                <Grid item xs={12} sm={6} md={4} key={researcherId}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar src={researcher.photoUrl} sx={{ width: 40, height: 40 }} />
                                    <Box>
                                      <Typography variant="body1" fontWeight="bold">
                                        {researcher.name}
                                      </Typography>
                                      <Typography variant="body2" color="text.secondary">
                                        {researcher.title}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Grid>
                              ) : null;
                            })}
                          </Grid>

                          {project.mediaUrls.length > 0 && (
                            <Box sx={{ mt: 3 }}>
                              <Typography variant="h6" gutterBottom>
                                Project Media
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {project.mediaUrls.length} media files available
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      </Collapse>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="body1" color="text.secondary" align="center">
            Active projects will be displayed here.
          </Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="body1" color="text.secondary" align="center">
            Completed projects will be displayed here.
          </Typography>
        </TabPanel>
      </motion.div>
    </Box>
  );
};

export default ResearchPage;
