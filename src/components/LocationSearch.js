
import React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// React Icons
import { IoSearchSharp } from 'react-icons/io5';
import { pink } from '@mui/material/colors';

const choices = [
  { id: 1, title: 'Where', subtitle: 'Search destinations' },
  { id: 2, title: 'Check in', subtitle: 'Add dates' },
  { id: 3, title: 'Check out', subtitle: 'Add dates' },
  { id: 4, title: 'Who', subtitle: 'Add guests', withIcon: true },
];
// const [activeButton, setActiveButton] = React.useState("stays")
const LocationSearch = () => {
  const [activeButton, setActiveButton] = React.useState("stays")
  return (
    
    
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 50,
        padding: '8px 16px',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
        width: '900px',
        height:'80px',
        marginTop: '10px',
        marginBottom:'10px'
      }}
      elevation={3}
    >
        {/* <div className="flex space-x-1">
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
      </div> */}
      {choices.map((choice) => (
        <React.Fragment key={choice.id}>
          
          <Button
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textTransform: 'none',
              padding: '0 16px',
              minWidth: 'fit-content',
            }}
          >
            
            <Typography
              sx={{
                fontWeight: '',
                fontSize: '14px',
                color:'black'
              }}
            >
              {choice.title}
            </Typography>
            <Typography
              sx={{
                color: '#777',
                fontSize: '15px',
              }}
            >
              {choice.subtitle}
            </Typography>
          </Button>
          {choice.id !== choices.length && (
            <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: '#ddd' }} />
          )}
        </React.Fragment>
      ))}

      {/* Search Icon */}
      {/* <Box sx={{ ml: 2 }}> */}
        {/* <IoSearchSharp size={25} color={pink[500]} />
      </Box> */}
          <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '32px', // h-8 in Tailwind
        width: '32px',  // w-8 in Tailwind
        borderRadius: '50%', // rounded-full
        backgroundColor: '#FF385C', // bg-[#FF385C]
      }}
    >
      <IoSearchSharp size={25} color="#FFFFFF" /> {/* h-4 w-4 text-white */}
    </Box>
      
    </Paper>
    
  );
};

export default LocationSearch;

