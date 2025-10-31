import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Tabs,
  Tab,
  Chip,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { PlayArrow, Description, Image } from '@mui/icons-material';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { mockMedia, mockProjects } from '../mock-data';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box>{children}</Box>}
  </div>
);

const GalleryPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setSelectedTag(null);
  };

  const allTags = Array.from(
    new Set(mockMedia.flatMap(media => media.tags))
  );

  const filteredMedia = mockMedia.filter(media => {
    const matchesType =
      tabValue === 0 ||
      (tabValue === 1 && media.type === 'video') ||
      (tabValue === 2 && media.type === 'image') ||
      (tabValue === 3 && media.type === 'document');
    const matchesTag = !selectedTag || media.tags.includes(selectedTag);
    return matchesType && matchesTag;
  });

  const getProjectName = (projectId?: string) => {
    if (!projectId) return null;
    const project = mockProjects.find(p => p.id === projectId);
    return project ? project.title : null;
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
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  const imageGalleryItems = mockMedia
    .filter(media => media.type === 'image')
    .map(media => ({
      original: media.url,
      thumbnail: media.url,
      description: media.caption,
      originalAlt: media.title,
      thumbnailAlt: media.title
    }));

  const tabs = [
    { label: `All (${mockMedia.length})` },
    { label: `Videos (${mockMedia.filter(m => m.type === 'video').length})` },
    { label: `Images (${mockMedia.filter(m => m.type === 'image').length})` },
    { label: `Documents (${mockMedia.filter(m => m.type === 'document').length})` },
  ];

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Research Gallery
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Explore our research through videos, images, and documents
        </Typography>
      </motion.div>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 4 }}>
        <Chip
          label="All Tags"
          variant={selectedTag === null ? "filled" : "outlined"}
          onClick={() => setSelectedTag(null)}
          color="primary"
        />
        {allTags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            variant={selectedTag === tag ? "filled" : "outlined"}
            onClick={() => setSelectedTag(tag)}
            color="secondary"
          />
        ))}
      </Box>

      <TabPanel value={tabValue} index={0}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Grid container spacing={4}>
            {filteredMedia.map((media) => {
              const projectName = getProjectName(media.projectId);
              return (
                <Grid item xs={12} sm={6} md={4} key={media.id}>
                  <motion.div variants={item}>
                    <Card elevation={3} sx={{ height: '100%' }}>
                      {media.type === 'image' && (
                        <>
                          <CardMedia
                            component="img"
                            height="200"
                            image={media.url}
                            alt={media.title}
                            sx={{ objectFit: 'cover' }}
                          />
                          <Box sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            borderRadius: '50%',
                            p: 1
                          }}>
                            <Image sx={{ color: 'white' }} />
                          </Box>
                        </>
                      )}

                      {(media.type === 'video' || media.type === 'document') && (
                        <Box
                          sx={{
                            height: 200,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'grey.200',
                            position: 'relative'
                          }}
                        >
                          <Box sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            borderRadius: '50%',
                            p: 2
                          }}>
                            {media.type === 'video' ? (
                              <PlayArrow sx={{ fontSize: 48, color: 'white' }} />
                            ) : (
                              <Description sx={{ fontSize: 48, color: 'white' }} />
                            )}
                          </Box>
                          <Box sx={{
                            position: 'absolute',
                            bottom: 10,
                            right: 10,
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            borderRadius: 1,
                            px: 1,
                            py: 0.5
                          }}>
                            <Typography variant="body2" color="text.primary">
                              {media.type.charAt(0).toUpperCase() + media.type.slice(1)}
                            </Typography>
                          </Box>
                        </Box>
                      )}

                      <CardContent>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {media.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {media.caption}
                        </Typography>

                        {projectName && (
                          <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                            Project: {projectName}
                          </Typography>
                        )}

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {media.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              variant="outlined"
                              sx={{ fontSize: '0.7rem' }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            Video gallery functionality coming soon...
          </Typography>
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Image Gallery
            </Typography>
            {imageGalleryItems.length > 0 ? (
              <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                <ImageGallery
                  items={imageGalleryItems}
                  showNav={true}
                  showThumbnails={true}
                  showFullscreenButton={true}
                  showPlayButton={false}
                  showBullets={true}
                  autoPlay={false}
                  slideDuration={300}
                  slideInterval={3000}
                  infinite={true}
                  lazyLoad={true}
                  useTranslate3D={true}
                />
              </div>
            ) : (
              <Typography variant="body1" color="text.secondary">
                No images available.
              </Typography>
            )}
          </Box>
        </motion.div>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            Document viewing functionality coming soon...
          </Typography>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default GalleryPage;
