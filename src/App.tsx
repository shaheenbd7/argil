import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import TeamPage from './pages/TeamPage';
import PublicationsPage from './pages/PublicationsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';

const pageVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -100,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Container maxWidth="lg">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    key="home"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <HomePage />
                  </motion.div>
                }
              />
              <Route
                path="/research"
                element={
                  <motion.div
                    key="research"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <ResearchPage />
                  </motion.div>
                }
              />
              <Route
                path="/team"
                element={
                  <motion.div
                    key="team"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <TeamPage />
                  </motion.div>
                }
              />
              <Route
                path="/publications"
                element={
                  <motion.div
                    key="publications"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <PublicationsPage />
                  </motion.div>
                }
              />
              <Route
                path="/gallery"
                element={
                  <motion.div
                    key="gallery"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <GalleryPage />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    key="about"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <AboutPage />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
