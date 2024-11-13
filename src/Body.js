import React from 'react';
import { Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';


function Body() {
  const [value] = React.useState(2);
  return (
    <Box sx={{ flex: 1, p: 2, position:'relative' }}>
      <Typography variant="h4" sx={{position:'relative',marginLeft:'470px'}} gutterBottom>Milestones Of Tollywood</Typography>
      <Stack spacing={1} direction="row" sx={{marginLeft:'380px'}}>
      <Button variant="outlined">Action</Button>
      <Button variant="outlined">Drama</Button>
      <Button variant="outlined">Romance</Button>
      <Button variant="outlined">Horror</Button>
      <Button variant="outlined">Suspense Thriller</Button>
    </Stack>
    <Box
      sx={{
        position:'relative',top:'50px',
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 430,
        },
      }}
    >
      <Paper elevation={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        <img src="rrr.jpg" alt="RRR" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        <Typography variant="h6" sx={{ position:'realtive', top:'20px'}}>
        RRR
        </Typography>
        <Rating name="read-only" value={5} readOnly />
      </Paper>
      
      <Paper elevation={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <img src="salar.jpg" alt="salar" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
      <Typography variant="h6" sx={{ position:'realtive', top:'20px'}}>
      SALAR
      </Typography>
      <Rating name="read-only" value={5} readOnly />
      </Paper>

      <Paper elevation={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <img src="kalki.jpg" alt="RRR" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
      <Typography variant="h6" sx={{ position:'realtive', top:'20px'}}>
      KALKI 2898 AD
      </Typography>
      <Rating name="read-only" value={4} readOnly />
      </Paper>

      <Paper elevation={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <img src="pushpa.jpg" alt="pushpa" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
      <Typography variant="h6" sx={{ position:'realtive', top:'20px'}}>
      PUSHPA: THE RISE
      </Typography>
      <Rating name="read-only" value={3} readOnly />
      </Paper>

      <Paper elevation={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <img src="bahubali.jpg" alt="bahubali" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
      <Typography variant="h6" sx={{ position:'realtive', top:'20px'}}>
      BAHUBALI
      </Typography>
      <Rating name="read-only" value={4} readOnly />
      </Paper>
    </Box>
    </Box>
    
  );
}

export default Body;