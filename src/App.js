
// // // // import './App.css';
// // // // import Box from '@mui/material/CssBaseline';
// // // // import Header from './Header';
// // // // import React from 'react';
// // // // import CssBaseline from '@mui/material/CssBaseline';

// // // // function App() {
// // // //   return (
// // // //     <React.Fragment>
// // // //       <CssBaseLine/>
// // // //       <Box
// // // //       sx={{
// // // //         display:'flex',
// // // //         flexDirection:'column',
// // // //         height:'100vh',

// // // //       }}
// // // //       >
// // // //         <Box>
// // // //       <Header/>
// // // //       </Box>
// // // //       </Box>
// // // //     </React.Fragment>
    
// // // //   );
// // // // }

// // // // export default App;
// // // import './App.css';
// // // import React from 'react';
// // // import Box from '@mui/material/Box';
// // // import CssBaseline from '@mui/material/CssBaseline';
// // // import Header from './components/Header';
// // // import OptionsTab from './components/OptionsTab';
// // // import { Container } from '@mui/material';
// // // import LocationCards from './components/LocationCards';

// // // function App() {
// // //   return (
// // //     <React.Fragment>
// // //       <CssBaseline />
// // //       <Box
// // //         sx={{
// // //           display: 'flex',
// // //           flexDirection: 'column',
// // //           height: '100vh',
// // //         }}
// // //       >
// // //         <Box>
// // //           <Header />
// // //           <OptionsTab/>
// // //           <Box
// // //           sx={{
// // //             display:'flex',
// // //             flexDirection:"column",
// // //             flexGrow:1,
// // //             height:100,
// // //             overflow:'scroll',
// // //           }}>

// // //           {/* </Box> */}
// // //           <Container maxWidth="xl"sx={{mb:3}}>
// // //            <LocationCards/>
// // //           </Container>
// // //         </Box>
// // //       </Box>
// // //     </React.Fragment>
// // //   );
// // // }

// // // export default App;


// // import './App.css';
// // import React from 'react';
// // import Box from '@mui/material/Box';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import Header from './components/Header';
// // import OptionsTab from './components/OptionsTab';
// // import { Container } from '@mui/material';
// // import LocationCards from './components/LocationCards';
// // import Footer from './components/Footer';
// // import FooterMenu from './components/FooterMenu';
// import { displayOnDesktop } from './themes/commonStyles';
// import MobileFooter from './components/MobileFooter';
// // import FooterGetaways from './components/FooterGetaways';
// // import FooterSupport from './components/FooterSupport';


// // function App() {
// //   return (
// //     <React.Fragment>
// //       <CssBaseline />
// //       <Box
// //         sx={{
// //           display: 'flex',
// //           flexDirection: 'column',
// //           height: '100vh',
// //         }}
// //       >
// //         <Box>
// //           <Header />
// //           <OptionsTab />
// //         </Box>
// //         <Box
// //           sx={{
// //             display: 'flex',
// //             flexDirection: 'column',
// //             flexGrow: 1,
// //             height: 100,
// //             overflowY: 'scroll',
// //           }}
// //         >
// //           <Container maxWidth="xl" sx={{ mb: 3 }}>
// //             <LocationCards /> 
// //             <Box
// //               sx={{
// //                 display: { xs: 'flex', md: 'none' },
// //               }}
// //             >
// //               <MobileFooter />
// //             </Box> 
// //            </Container>
// //         </Box>
// //         {/* <div>
// //       <FooterGetaways />
// //       <FooterSupport />
// //     </div> */}
// //         <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
// //           <FooterGetaways />
// //         </Box>
// //         <Box >
// //           <FooterSupport />
// //         </Box> 
// //       </Box>
// //     </React.Fragment>
// //   );
// // }

// // export default App;




// // // function App() {
// // //   return (
// // //     <React.Fragment>
// // //       <CssBaseline />
// // //       <Box
// // //         sx={{
// // //           display: 'flex',
// // //           flexDirection: 'column',
// // //           height: '100vh',
// // //         }}
// // //       >
// // //         <Box>
// // //           <Header />
// // //           <OptionsTab />
// // //           <Box
// // //             sx={{
// // //               display: 'flex',
// // //               flexDirection: 'column',
// // //               flexGrow: 1,
// // //               height: 100,
// // //               overflow: 'scroll',
// // //             }}
// // //           >
// // //             <Container maxWidth="xl" sx={{ mb: 3 }}>
// // //               <LocationCards />
// // //               <Box sx={{
// // //                 display:{xs:'flex', md:'none'},
// // //               }}>
// // //                 <MobileFooter/>
// // //               </Box>
// // //             </Container>
// // //           </Box>
// // //           <Box sx={{display:{xs:'flex',md:'none'}}}>
// // //             <FooterMenu/>
// // //           </Box>
// // //           <Box sx={displayOnDesktop}>
// // //             <Footer/>
// // //           </Box>
// // //         </Box>
// // //       </Box>
// // //     </React.Fragment>
// // //   );
// // // }

// // // export default App;

// import './App.css';
// import React from 'react';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Header from './components/Header';
// import OptionsTab from './components/OptionsTab';
// import { Container } from '@mui/material';
// import LocationCards from './components/LocationCards';
// import FooterGetaways from './components/FooterGetaways';
// import FooterSupport from './components/FooterSupport';

// function App() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           height: '100vh',
//         }}
//       >
//         <Box>
//           <Header />
//           <OptionsTab />
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             flexGrow: 1,
//             height: '100vh',
//             overflowY: 'auto',
//           }}
//         >
//           <Container maxWidth="xl" sx={{ mb: 3 }}>
//             <LocationCards />
//             <Box
//               sx={{
//                 display: { xs: 'flex', md: 'none' },
//               }}
//             >
//               <MobileFooter />
//             </Box>
//           </Container>
//         </Box>
//         {/* <Box>
//            <FooterGetaways />
//            <FooterSupport />
//        </Box> */}
// <Box
//   sx={{
//     display: 'flex',
//     flexDirection: 'column',
//     mt: 'auto', // Ensures the footer is pushed to the bottom of the content
//   }}
// >
//   {/* Footer for mobile */}
//   <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//     <FooterGetaways />
//   </Box>

//   {/* Footer for desktop */}
//   <Box sx={displayOnDesktop}>
//     <FooterSupport />
//   </Box>
// </Box>

//         {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//           <FooterGetaways />
//         </Box>
//         <Box sx={displayOnDesktop}>
//           <FooterSupport />
//         </Box> */}
//       </Box>
//     </React.Fragment>
//   );
// }

// export default App;

// // function App() {
// //   return (
// //     <React.Fragment>
// //       <CssBaseline />
// //       <Box
// //         sx={{
// //           display: 'flex',
// //           flexDirection: 'column',
// //           minHeight: '100vh', // Ensure the content takes at least the viewport height
// //         }}
// //       >
// //         {/* Header Section */}
// //         <Box>
// //           <Header />
// //           <OptionsTab />
// //         </Box>

// //         {/* Main Content Section */}
// //         {/* <Box
// //           sx={{
// //             flexGrow: 1, // Let this section grow to fill available space
// //             overflowY: 'scroll',
// //            // Allow scrolling for content overflow
// //           }}
// //         > */}
// //         <Box
// //   sx={{
// //     flexGrow: 1, // Let this section grow to fill available space
// //     overflowY: 'scroll', // Allow scrolling for content overflow
// //     scrollbarWidth: 'thin', // For Firefox: Thin scrollbar
// //     scrollbarColor: '#888 #f1f1f1', // For Firefox: Thumb and track colors
// //     '&::-webkit-scrollbar': {
// //       width: '8px', // Scrollbar width for WebKit browsers
// //     },
// //     '&::-webkit-scrollbar-track': {
// //       backgroundColor: '#f1f1f1', // Scrollbar track color
// //     },
// //     '&::-webkit-scrollbar-thumb': {
// //       backgroundColor: '#888', // Scrollbar thumb color
// //       borderRadius: '4px', // Rounded scrollbar thumb
// //     },
// //     '&::-webkit-scrollbar-thumb:hover': {
// //       backgroundColor: '#555', // Thumb color on hover
// //     },
// //   }}
// // >
// //   {/* Your scrollable content goes here */}
// // </Box>

// //           <Container maxWidth="xl" sx={{ mb: 3 }}>
// //             <LocationCards />
// //           </Container>
// //         </Box>

// //         {/* Footer Section */}
// //         <Box>
// //           <FooterGetaways />
// //           <FooterSupport />
// //         </Box>
      
// //     </React.Fragment>
// //   );
// // }

// // export default App;




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
             {/* <Box >
              <Foot/>
            </Box> */}

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
