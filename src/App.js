
import './App.css'
import React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { Container } from '@mui/material'
import Header from './components/Header'
import OptionsTab from './components/OptionsTab'
import LocationCards from './components/LocationCards'
import FooterGetaways from './components/FooterGetaways'
import FooterSupport from './components/FooterSupport'
import MobileFooter from './components/MobileFooter'
import { displayOnDesktop } from './themes/commonStyles'
// import Foot from './components/Foot'

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden', // Prevent scrolling on the main container
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            overflowY: 'auto', // Enable vertical scrolling
            '&::-webkit-scrollbar': {
              width: '12px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#888',
              borderRadius: '6px',
              border: '3px solid #f1f1f1',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#555',
            },
            scrollbarWidth: 'thin',
            scrollbarColor: '#888 #f1f1f1',
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3, flexGrow: 1 }}>
            <LocationCards />
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: 'auto',
            }}
          >
          

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <FooterGetaways />
            </Box>
            <Box sx={displayOnDesktop}>
              <FooterSupport />
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}
