

import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

const ProfileSettings = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        borderRadius: '24px',
        border: '1px solid white',
        width: 'fit-content',
      }}
    >
      {/* Airbnb Link */}
      <Link
        href="#"
        underline="none"
        sx={{
          fontSize: '16px',
          fontWeight: '500',
          color: 'black',
          marginRight: '16px',
        }}
      >
        Airbnb your home
      </Link>

      {/* Icons Section */}
      <Stack direction="row" spacing={1} alignItems="center">
        {/* Globe Icon */}
        <IconButton>
          <BsGlobe size={20} />
        </IconButton>

        {/* Menu and User Icon */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '24px',
            border: '1px solid #ddd',
            padding: '4px 8px',
          }}
        >
          <AiOutlineMenu size={20} style={{ marginRight: '8px' }} />
          <FaRegUserCircle size={20} />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;




