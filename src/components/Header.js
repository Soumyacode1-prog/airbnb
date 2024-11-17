import React from 'react'
import { Box } from '@mui/material'
// import Container from '@mui/material'
import Container from '@mui/material/Container';
import Logo from './Logo';
import{
    flexBetweenCenter,dFlex,
    displayOnDesktop} from '../themes/commonStyles';
import LocationSearch from './LocationSearch';
import ProfileSettings from './ProfileSettings';
import MobileSearch from './MobileSearch';



const Header = () => {
  return (
    <Box sx={{
        ...dFlex,
        minHeight:70,
        borderBottom:'1px solid #ddd',

    }}>
        <Container maxWidth="xl">
            <Box 
            sx={{
                ...flexBetweenCenter,
                minHeight:70,
                px:4,

            }}>
                <Box sx={displayOnDesktop}>
                    <Logo/>
                </Box>
                <Box sx={displayOnDesktop}>
                  
                <LocationSearch/>  
                </Box>
                <Box sx={displayOnDesktop}>
                 
                <ProfileSettings/>   
                </Box>
                <Box sx={{display:{xs:'flex',md:'none'}}}>
                 <MobileSearch/>  
                </Box>

                

        
    </Box>
    </Container>
    </Box>
  );
};

export default Header;