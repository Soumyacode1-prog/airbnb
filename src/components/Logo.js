// // // // import React from 'react'
// // // // import Box from '@mui/material/Typography';
// // // // import Typography from '@mui/material/Typography';
// // // // import { Tabs, Tab } from '@mui/material';
// // // // import {FaAirbnb} from 'react-icons/fa'
// // // // // import { flexCenter } from '../themes/commonStyles';
// // // // import {pink} from '@mui/material/colors';

// // // // // import React from 'react';
// // // // // import Box from '@mui/material/Box';
// // // // // import Typography from '@mui/material/Typography';
// // // // // // react icons
// // // // // import { FaAirbnb } from 'react-icons/fa';
// // // // // import { flexCenter } from 'themes/commonStyles';
// // // // // import { pink } from '@mui/material/colors';

// // // // const Logo = () => {
// // // //   return (
// // // //     // <Box sx={flexCenter}>
// // // //     //   <FaAirbnb size={40} color={pink[500]} marginTop={-10px} />
// // // //     <Box 
// // // //       sx={{
// // // //         marginTop: '-10px', // Apply negative top margin
// // // //         display: 'inline-block',
// // // //         marginLeft:'40px' // Ensure proper alignment if needed
// // // //       }}
// // // //     >
// // // //       <FaAirbnb size={40} color={pink[500]} style={{
// // // //         marginLeft: '-38px',
// // // //         marginBlockStart:'10px',
// // // //         marginBottom:"-8px" // Apply margin-left directly here
// // // //       }} />
    
// // // //       <Typography
// // // //         sx={{
// // // //           ml: 1,
// // // //           // color: (theme) => theme.palette.secondary.main,
// // // //           color:pink[500],
// // // //           fontSize: '28px',
// // // //           fontWeight: '900',
// // // //           marginTop:'-30px',
// // // //           marginRight:'10px'
// // // //         }}
// // // //         component="h3"
// // // //       >
// // // //         airBnB
// // // //       </Typography>
// // // //     </Box>
// // // //      <div className="flex items-center justify-between mb-4">
// // // //      <Tabs className="h-10">
// // // //        <Tab
// // // //          value="stays"
// // // //          className="data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-4"
// // // //        >
// // // //          Stays
// // // //        </Tab>
// // // //        <Tab
// // // //          value="experiences"
// // // //          className="data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-4"
// // // //        >
// // // //          Experiences
// // // //        </Tab>
// // // //      </Tabs>
// // // //   );
// // // // };

// // // // export default Logo;

// // // import React from 'react';
// // // import Box from '@mui/material/Box';  // Corrected Box import
// // // import Typography from '@mui/material/Typography';
// // // import { Tabs, Tab } from '@mui/material';
// // // import { FaAirbnb } from 'react-icons/fa';
// // // import { pink } from '@mui/material/colors';

// // // const Logo = () => {
// // //   return (
// // //     <>
// // //       {/* Logo and Text Section */}
// // //       <Box
// // //         sx={{
// // //           marginTop: '-10px',
// // //           display: 'inline-block',
// // //           marginLeft: '40px',
// // //         }}
// // //       >
// // //         <FaAirbnb
// // //           size={40}
// // //           color={pink[500]}
// // //           style={{
// // //             marginLeft: '-38px',
// // //             marginBlockStart: '10px',
// // //             marginBottom: '-8px',
// // //           }}
// // //         />
// // //         <Typography
// // //           sx={{
// // //             ml: 1,
// // //             color: pink[500],
// // //             fontSize: '28px',
// // //             fontWeight: '900',
// // //             marginTop: '-30px',
// // //             marginRight: '10px',
// // //           }}
// // //           component="h3"
// // //         >
// // //           airBnB
// // //         </Typography>
// // //       </Box>

// // //       {/* Tabs Section */}
// // //       <div className="flex items-center justify-between mb-4">
// // //         <Tabs className="h-10">
// // //           <Tab
// // //             value="stays"
// // //             className="data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-4"
// // //           >
// // //             Stays
// // //           </Tab>
// // //           {/* <Tab
// // //             value="experiences"
// // //             className="data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-4"
// // //           >
// // //             Experiences
// // //           </Tab> */}
// // //         </Tabs>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Logo;
// // import React, { useState } from 'react';
// // import Box from '@mui/material/Box';  // Corrected Box import
// // import Typography from '@mui/material/Typography';
// // import { Tabs, Tab } from '@mui/material';
// // import { FaAirbnb } from 'react-icons/fa';
// // import { pink } from '@mui/material/colors';

// // const Logo = () => {
// //   // State to manage the selected tab
// //   const [selectedTab, setSelectedTab] = useState('stays');

// //   // Handle tab change
// //   const handleTabChange = (event, newValue) => {
// //     setSelectedTab(newValue);
// //   };

// //   return (
// //     <>
// //       {/* Logo and Text Section */}
// //       <Box
// //         sx={{
// //           marginTop: '-10px',
// //           display: 'inline-block',
// //           marginLeft: '40px',
// //         }}
// //       >
// //         <FaAirbnb
// //           size={40}
// //           color={pink[500]}
// //           style={{
// //             marginLeft: '-38px',
// //             marginBlockStart: '10px',
// //             marginBottom: '-8px',
// //           }}
// //         />
// //         <Typography
// //           sx={{
// //             ml: 1,
// //             color: pink[500],
// //             fontSize: '28px',
// //             fontWeight: '900',
// //             marginTop: '-30px',
// //             marginRight: '10px',
// //           }}
// //           component="h3"
// //         >
// //           airBnB
// //         </Typography>
// //       </Box>

// //       {/* Tabs Section */}
// //       <div className="flex items-center justify-between mb-4">
// //         <Tabs
// //           value={selectedTab}
// //           onChange={handleTabChange}
// //           className="h-100"
// //         >
// //           <Tab
// //             value="stays"
// //             className="data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-4"
// //           >
// //             Stays
// //           </Tab>
// //           <Tab
// //             value="experiences"
// //             className="data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-4"
// //           >
// //             Experiences
// //           </Tab>
// //         </Tabs>
// //       </div>
// //     </>
// //   );
// // };

// // export default Logo;
// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { Tabs, Tab, Button } from '@mui/material';
// import { FaAirbnb } from 'react-icons/fa';
// import { pink } from '@mui/material/colors';

// const Logo = () => {
//   // State to manage the selected tab
//   const [selectedTab, setSelectedTab] = useState('stays');

//   // Handle tab change
//   const handleTabChange = (event, newValue) => {
//     // Persist the event to prevent it from being nullified
//     event.persist();
    
//     // Update the selected tab
//     setSelectedTab(newValue);
//   };

//   return (
//     <>
//       {/* Logo and Text Section */}
//       <Box
//         sx={{
//           marginTop: '-10px',
//           display: 'inline-block',
//           marginLeft: '40px',
//         }}
//       >
//         <FaAirbnb
//           size={40}
//           color={pink[500]}
//           style={{
//             marginLeft: '-38px',
//             marginBlockStart: '10px',
//             marginBottom: '-8px',
//           }}
//         />
//         <Typography
//           sx={{
//             ml: 1,
//             color: pink[500],
//             fontSize: '28px',
//             fontWeight: '900',
//             marginTop: '-30px',
//             marginRight: '10px',
//           }}
//           component="h3"
//         >
//           airBnB
//         </Typography>
//       </Box>

    
//       {/* <div className="flex items-center justify-between mb-4">
//         <Button >Stays</Button>
//         <Button >Experiences</Button> */}
//          <div className="flex items-center justify-between mb-4">
//       <Button
//         className={`px-6 py-2 text-lg font-bold rounded-md ${selectedTab === 'stays' ? 'text-pink-500 bg-pink-100' : 'text-gray-700 hover:bg-pink-50'}`}
//         onClick={() => handleButtonClick('stays')}
//       >
//         Stays
//       </Button>
//       <Button
//         className={`px-6 py-2 text-lg font-bold rounded-md ${selectedTab === 'experiences' ? 'text-pink-500 bg-pink-100' : 'text-gray-700 hover:bg-pink-50'}`}
//         onClick={() => handleButtonClick('experiences')}
//       >
//         Experiences
//       </Button>
//     </div>

//         {/* <Tabs
//           value={selectedTab}
//           onChange={handleTabChange}
//           className="h-100"
//         >
//           <Tab
//             value="stays"
//             className="data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-4"
//           >
//             Stays
//           </Tab>
//           <Tab
//             value="experiences"
//             className="data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-4"
//           >
//             Experiences
//           </Tab>
//         </Tabs> */}
      
    
// </>)}

// export default Logo;
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { FaAirbnb } from 'react-icons/fa';
import { pink } from '@mui/material/colors';
// import  logos from './000.PNG'
// import "./Logo.css"

const Logo = () => {
  // State to manage the selected tab
  // const [selectedTab, setSelectedTab] = useState('stays');
  const [activeButton, setActiveButton] = React.useState("stays")
  // Handle button click
  // const handleButtonClick = (tab) => {
  //   setSelectedTab(tab);
  // };

  return (
    <>
      {/* Logo and Text Section */}
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
      <div className="flex space-x-1">
        <Button
          variant="ghost"
          className={`rounded-full px-9 py-2 text-sm font-medium ${
            activeButton === "stays"
              ? "bg-transparent text-foreground border-b-2 border-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setActiveButton("stays")}
        >
          Stays
        </Button>
        <Button
          variant="ghost"
          className={`rounded-full px-4 py-2 text-sm font-medium ${
            activeButton === "experiences"
              ? "bg-transparent text-foreground border-b-2 border-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setActiveButton("experiences")}
        >
          Experiences
        </Button>
      </div>


      {/* Button Section for Stays and Experiences */}
      {/* <div className="flex items-center justify-between mb-4">
        <img src={logos} alt=""/> */}

{/* <div className="flex items-center">
  <img src={logos} alt="" className="custom-logo" />
</div> */}

        {/* <Button
          className={`px-6 py-2 text-lg font-bold rounded-md ${selectedTab === 'stays' ? 'text-pink-500 bg-pink-100' : 'text-gray-700 hover:bg-pink-50'}`}
          onClick={() => handleButtonClick('stays')}
        >
          Stays 
          <Button
  className={`px-60 py-2 text-lg font-bold rounded-md ${selectedTab === 'stays' ? 'text-pink-500 bg-pink-100' : 'text-gray-700 hover:bg-pink-50'} ml-4 mr-4 mt-4 mb-4`}
  onClick={() => handleButtonClick('stays')}
>
  Stays


        </Button>  */}

        {/* <Button
  onClick={() => handleButtonClick('stays')}
  sx={{
    padding: '8px 16px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    backgroundColor: selectedTab === 'stays' ? 'pink' : 'gray',
    color: selectedTab === 'stays' ? 'white' : 'black',
    marginLeft: '550px',
    marginRight: '16px',
    marginTop:'-100px',
    '&:hover': {
      backgroundColor: selectedTab === 'stays' ? 'lightpink' : 'lightgray',
    },
  }}
>
  Stays
</Button> */}
{/* <Button
  onClick={() => handleButtonClick('expiriences')}
  sx={{
    padding: '8px 16px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    backgroundColor: selectedTab === 'expiriences' ? 'pink' : 'gray',
    color: selectedTab === 'expiriences' ? 'white' : 'black',
    marginLeft: '16px',
    marginRight: '16px',
    '&:hover': {
      backgroundColor: selectedTab === 'expiriences' ? 'lightpink' : 'lightgray',
    },
  }}
>
  Experiences
</Button> */} 


        {/* <Button
          className={`px-6 py-2 text-lg font-bold rounded-md ${selectedTab === 'experiences' ? 'text-pink-500 bg-pink-100' : 'text-gray-700 hover:bg-pink-50'}`}
          onClick={() => handleButtonClick('experiences')}
        >
          Experiences
        </Button> */}
      
    </>
  );
};

export default Logo;
