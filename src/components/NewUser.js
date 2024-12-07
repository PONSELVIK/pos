import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import Header from './Header';
import { Box,Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function NewUser() {
   const navigate = useNavigate();
  return (
    <div>
      <Header />

      <Typography variant="h5" sx={{mt:4}}>Sales Made simple: Create Receipts in few click</Typography>
      <Box sx={{ display: 'flex', justifyContent:'space-around', gap:'2', alignItems:'center'}}>
        <img src=""/>


<div>
    <div class="step">
   <div>
      <div class="circle">1</div>
   </div>
   <div>
      <div class="title">Select Item and Quantity</div>
   </div>
</div>
<div class="step step-active">
   <div>
      <div class="circle">2</div>
   </div>
   <div>
      <div class="title">Review order an total amount</div>
   </div>
</div>
<div class="step">
   <div>
      <div class="circle">3</div>
   </div>
   <div>
      <div class="title">Select Payment mode </div>
   </div>
</div>
<div class="step">
   <div>
      <div class="circle">4</div>
   </div>
   <div>
      <div class="title">Print and Share Receipt</div>
   </div>
</div>

          <Typography variant="subtitle2" sx={{mt:6, color:'grey'}}>Discover How easy it is. Take a quick selling demo now!</Typography>
<Button
                                fullWidth
                                variant="contained"
                                color="success"
                               onClick={() => navigate('/tutorial')}
                            >
                                QUICK TUTORIAL
                            </Button>
          <Link href="#">Skip and Create Bussiness Account</Link>
</div>
      </Box>
    </div>
  )
};
export default NewUser;
