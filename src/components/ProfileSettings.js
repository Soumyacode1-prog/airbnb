// import React from 'react'
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// // react icons
// import { BsGlobe } from 'react-icons/bs';
// import { AiOutlineMenu } from 'react-icons/ai';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { flexCenter } from '../themes/commonStyles';
// // import LocationSearch from './LocationSearch';
// // import React from 'react';
// // import Box from '@mui/material/Box';
// // import Link from '@mui/material/Link';
// // import Button from '@mui/material/Button';
// // import Stack from '@mui/material/Stack';
// // // react icons
// // import { BsGlobe } from 'react-icons/bs';
// // import { AiOutlineMenu } from 'react-icons/ai';
// // import { FaRegUserCircle } from 'react-icons/fa';
// // import { flexCenter } from 'themes/commonStyles';

// const ProfileSettings = () => {
//   return (
//     <Box sx={flexCenter}>
//       <Link href="#"> Airbnb your Home</Link>
//       <Stack>
//         <Button>
//           <BsGlobe size={24} />
//         </Button>
//         <Button
//           sx={{
//             borderRadius: 10,
//             border: '1px solid #ddd',
//           }}
//         >
//           <Stack>
//             <AiOutlineMenu size={24} />
//             <FaRegUserCircle size={24} />
//           </Stack>
//         </Button>
//       </Stack>
//     </Box>
//   );
// };

// export default ProfileSettings;

import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
// React Icons
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




