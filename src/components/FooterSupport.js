import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const FooterSupport = () => {
  const supportLinks = [
    "Help Centre", "AirCover", "Anti-discrimination", "Disability support", "Cancellation options", "Report neighbourhood concern"
  ];
  const hostingLinks = [
    "Airbnb your home", "AirCover for Hosts", "Hosting resources", "Community forum", "Hosting responsibly", "Join a free Hosting class", "Find a co-host"
  ];
  const airbnbLinks = [
    "Newsroom", "New features", "Careers", "Investors", "Airbnb.org emergency stays"
  ];

  return (
    <Box sx={{ padding: '32px', backgroundColor: '#f8f8f8', borderTop: '1px solid #ddd' }}>
      <Grid container spacing={4}>
        {/* Support Column */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Support
          </Typography>
          {supportLinks.map((link, index) => (
            <Typography key={index} variant="body2" mb={1}>
              <Link href="#" underline="none" color="inherit">
                {link}
              </Link>
            </Typography>
          ))}
        </Grid>
        {/* Hosting Column */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Hosting
          </Typography>
          {hostingLinks.map((link, index) => (
            <Typography key={index} variant="body2" mb={1}>
              <Link href="#" underline="none" color="inherit">
                {link}
              </Link>
            </Typography>
          ))}
        </Grid>
        {/* Airbnb Column */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Airbnb
          </Typography>
          {airbnbLinks.map((link, index) => (
            <Typography key={index} variant="body2" mb={1}>
              <Link href="#" underline="none" color="inherit">
                {link}
              </Link>
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center', borderTop: '1px solid #ddd', pt: 2 }}>
        <Typography variant="body2" color="textSecondary">
          © 2024 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterSupport;
