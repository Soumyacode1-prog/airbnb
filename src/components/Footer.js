import React from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Language as LanguageIcon,
  AttachMoney as AttachMoneyIcon,
} from '@mui/icons-material'

const footerSections = [
  {
    title: 'Support',
    links: ['Help Center', 'AirCover', 'Safety information', 'Supporting people with disabilities', 'Cancellation options', 'Our COVID-19 Response', 'Report a neighborhood concern'],
  },
  {
    title: 'Community',
    links: ['Airbnb.org: disaster relief housing', 'Support Afghan refugees', 'Combating discrimination'],
  },
  {
    title: 'Hosting',
    links: ['Try hosting', 'AirCover for Hosts', 'Explore hosting resources', 'Visit our community forum', 'How to host responsibly'],
  },
  {
    title: 'Airbnb',
    links: ['Newsroom', 'Learn about new features', 'Letter from our founders', 'Careers', 'Investors', 'Gift cards'],
  },
]

export default function AirbnbFooter() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, borderTop: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          {footerSections.map((section) => (
            <Grid item xs={12} sm={6} md={3} key={section.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {section.title}
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Airbnb, Inc. All rights reserved
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2} justifyContent={isMobile ? 'flex-start' : 'flex-end'} alignItems="center">
              <Grid item>
                <Link href="#" color="inherit" sx={{ mr: 1 }}>
                  Privacy
                </Link>
                ·
                <Link href="#" color="inherit" sx={{ mx: 1 }}>
                  Terms
                </Link>
                ·
                <Link href="#" color="inherit" sx={{ mx: 1 }}>
                  Sitemap
                </Link>
              </Grid>
              <Grid item>
                <IconButton color="inherit" aria-label="Language">
                  <LanguageIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Currency">
                  <AttachMoneyIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="inherit" aria-label="Facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}