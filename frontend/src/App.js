import React from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';
import ButterToast, { POS_RIGHT, POS_TOP } from 'butter-toast';

import PostMessages from './components/PostMessages';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Container maxWidth='lg'>
        <AppBar position='static' color='inherit'>
          <Typography variant='h2' align='center'>
            Post Box
          </Typography>
        </AppBar>
        <PostMessages />
        <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
      </Container>
    </div>
  );
}
export default App;
