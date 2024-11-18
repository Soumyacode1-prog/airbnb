import React from 'react';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Logo from './Logo';
import {
  flexBetweenCenter, dFlex,
  displayOnDesktop
} from '../themes/commonStyles';
import LocationSearch from './LocationSearch';
import ProfileSettings from './ProfileSettings';
import MobileSearch from './MobileSearch';
import Experience from './Experience';

const Header = () => {
  return (
    <Box
      sx={{
        minHeight: 70,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        {/* First Row: Logo, Experience, ProfileSettings */}
        <Box
          sx={{
            ...dFlex,
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 70,
            px: 4,
          }}
        >
          {/* Logo Section */}
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>

          {/* Experience Section */}
          <Box sx={displayOnDesktop}>
            <Experience />
          </Box>

          {/* Profile Settings Section */}
          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>

          {/* Mobile Search (Visible on Mobile Only) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MobileSearch />
          </Box>
        </Box>

        {/* Second Row: LocationSearch */}
        <Box
          sx={{
            ...dFlex,
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 50,
            px: 4,
            mt: 1, // Add margin-top for spacing between rows
          }}
        >
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
