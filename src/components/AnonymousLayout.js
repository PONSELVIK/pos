import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import More from '../pages/More';
import { Box,Typography,Grid,Button  } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import Header from './Header';
import NewUser from './NewUser';
import Login from './Login';

function AnonymousLayout() {
    const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login');
  };

  const handleNewUserClick = () => {
    navigate('/newUser');
  };

    return (
        <div >
        <Header />
            <Box sx={{height:'70vh'}}>

            </Box>

            <Typography variant="h5" sx={{textAlign :'center'}}>
                Since 2018, Lakhs of bussiness owners in 190+ countries trust us.
            </Typography>

             <Grid container spacing={2} mt={2}>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="success"
                                 onClick={handleNewUserClick}
                            >
                                NEW USER
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ backgroundColor: 'rgb(40 83 216)', color: 'white' }}
                                onClick={handleSignInClick}
                            >
                                EXISTING USER - SIGN IN
                            </Button>
                        </Grid>
                    </Grid>

        </div>
    );
}

export default AnonymousLayout;
