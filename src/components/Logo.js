
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { FaAirbnb } from 'react-icons/fa';
import { pink } from '@mui/material/colors';


const Logo = () => {


  return (
    <>
      {/* Logo and Text Section */}
      <div className='flex-col'>
        <div className='flex flex-row'>
        <Box
        sx={{
          marginTop: '-10px',
          display: 'inline-block',
          marginLeft: '40px',
        }}
      >
        <FaAirbnb
          size={40}
          color={pink[500]}
          style={{
            marginLeft: '-38px',
            marginBlockStart: '10px',
            marginBottom: '-8px',
          }}
        />
        <Typography
          sx={{
            ml: 1,
            color: '#FF385C',
            fontSize: '28px',
            fontWeight: '900',
            marginTop: '500px',
            marginRight: '16px',
            marginTop:'-40px',
          }}
          component="h3"
        >
          airBnB
        </Typography>
        {/* <div className="flex items-center">
  <img src={logos} alt="" className="custom-logo" />
</div> */}
      </Box>
   
        </div>
      </div>
      






      
    </>
  );
};

export default Logo;
