// import React from 'react'
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import {locations as cardLocations} from '../data/mock-data';
// import CarouselCard from './CarouselCard';

// // import React from 'react';
// // import Grid from '@mui/material/Grid';
// // import Box from '@mui/material/Box';
// // import { locations as cardLocations } from 'data/mock-data';
// // import CarouselCard from './CarouselCard';

// const LocationCards = () => {
//   const [cards] = React.useState(cardLocations);
//   if (!cards.length) {
//     return null;
//   }
//   return (
//     <Box sx={{ mx: 2 }}>
//       <Grid container rowSpacing={3} columnSpacing={3}>
//         {cards.map((location) => {
//           return (
//             <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
//               <CarouselCard location={location} />
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default LocationCards;
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { locations as cardLocations } from '../data/mock-data';
import CarouselCard from './CarouselCard';

const LocationCards = () => {
  const [cards] = React.useState(cardLocations);
  
  // Return null if there are no cards to display
  if (!cards.length) {
    return null;
  }

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => (
          <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
            <CarouselCard location={location} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LocationCards;



// const LocationCards = () => {
//     const [cards]=React.useState(cardLocations);
//     if (!cards.length){
//         return null
//     }
//   return (
//     <Box sx={{mx:2}}
//     >
//         <Grid container rowSpacing={3} columnSpacing={3}>
//             {
//                 cards.map(location =>{
//                     return(
//                         <Grid key={location.id} xs={12} sm={2}md={4} lg={3}>
//                             <CarouselCard location ={location}/>
//                             {/* {location.location} */}
//                             </Grid>
//                     )
//                 })
//             }
//         </Grid>
    
    
//     </Box>
//   )
// }

// export default LocationCards