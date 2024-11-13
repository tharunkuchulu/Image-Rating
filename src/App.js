import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Body />
      </Box>
    </Box>
  );
}

export default App;