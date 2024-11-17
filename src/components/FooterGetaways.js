import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const FooterGetaways = () => {
  const destinations = [
    { title: "Canmore", subtitle: "Pet-friendly rentals" },
    { title: "Benalmádena", subtitle: "House rentals" },
    { title: "Marbella", subtitle: "Villa rentals" },
    { title: "Mijas", subtitle: "Flat rentals" },
    { title: "Prescott", subtitle: "Cottage rentals" },
    { title: "Scottsdale", subtitle: "Mansion rentals" },
    { title: "Tucson", subtitle: "House rentals" },
    { title: "Jasper", subtitle: "Cabin rentals" },
    { title: "Mountain View", subtitle: "Cabin rentals" },
    { title: "Devonport", subtitle: "Cottage rentals" },
    { title: "Mallacoota", subtitle: "Beach house rentals" },
    { title: "Ibiza", subtitle: "Holiday rentals" },
    { title: "Anaheim", subtitle: "Apartment rentals" },
    { title: "Monterey", subtitle: "Cottage rentals" },
    { title: "Paso Robles", subtitle: "House rentals" },
    { title: "Santa Barbara", subtitle: "Beachfront rentals" },
    { title: "Sonoma", subtitle: "Cabin rentals" },
  ];

  return (
    <Box sx={{ padding: '32px', backgroundColor: '#f8f8f8' }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Inspiration for future getaways
      </Typography>
      <Box sx={{ display: 'flex', gap: '16px', borderBottom: '2px solid black', pb: 1, mb: 2 }}>
        {['Popular', 'Arts & culture', 'Outdoors', 'Mountains', 'Beach', 'Unique stays', 'Categories', 'Things to do'].map((category) => (
          <Typography key={category} variant="body2" sx={{ cursor: 'pointer', fontWeight: 'bold' }}>
            {category}
          </Typography>
        ))}
      </Box>
      <Grid container spacing={2}>
        {destinations.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Typography variant="body1" fontWeight="bold">
              <Link href="#" underline="none" color="inherit">
                {item.title}
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.subtitle}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FooterGetaways;
