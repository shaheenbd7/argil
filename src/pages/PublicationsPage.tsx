import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  InputAdornment,
  TextField,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Search, Download, OpenInNew } from '@mui/icons-material';
import { mockPublications } from '../mock-data';

const PublicationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(mockPublications.flatMap(pub => pub.tags))
  );

  const filteredPublications = mockPublications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || pub.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

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
          Research Publications
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6 }}>
          Scientific contributions advancing knowledge in sustainable research and environmental innovation
        </Typography>

        <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
          <TextField
            fullWidth
            placeholder="Search publications, authors, or abstracts..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 4 }}>
          <Chip
            label="All"
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
              color="primary"
            />
          ))}
        </Box>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Typography variant="h6" sx={{ mb: 3 }}>
          {filteredPublications.length} Publication{filteredPublications.length !== 1 ? 's' : ''} Found
        </Typography>

        <Grid container spacing={3}>
          {filteredPublications.map((publication, index) => (
            <Grid item xs={12} key={publication.id}>
              <motion.div
                variants={item}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card elevation={1}>
                  <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={8}>
                        <Typography variant="h6" component="h2" gutterBottom>
                          {publication.title}
                        </Typography>
                        <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                          {publication.authors.join(', ')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                          {publication.abstract}
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          {publication.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              variant="outlined"
                              color="secondary"
                            />
                          ))}
                        </Box>

                        <Typography variant="body2" color="text.secondary">
                          <strong>Published:</strong> {new Date(publication.publicationDate).toLocaleDateString()} in <em>{publication.journal}</em>
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <Button
                            variant="contained"
                            startIcon={<Download />}
                            fullWidth
                            size="large"
                            disabled={!publication.pdfUrl}
                          >
                            Download PDF
                          </Button>

                          {publication.doiUrl && (
                            <Button
                              variant="outlined"
                              startIcon={<OpenInNew />}
                              fullWidth
                              size="large"
                              href={publication.doiUrl}
                              target="_blank"
                            >
                              View DOI
                            </Button>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {filteredPublications.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No publications found matching your search criteria.
            </Typography>
          </Box>
        )}
      </motion.div>
    </Box>
  );
};

export default PublicationsPage;
