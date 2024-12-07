import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import Header from './Header';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// preview-start
const providers = [
  { id: 'google', name: 'Google' },
  { id: 'facebook', name: 'Facebook' },
];

// preview-end

const signIn = async (provider,navigate) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
       navigate('/home');
    }, 500);

  });
  return promise;
};

export default function Login() {
    const navigate = useNavigate();
  return (
          <div>
          <Header />
           <Box sx={{height:'30vh'}}>

            </Box>
    <AppProvider>
      <SignInPage signIn={(provider) => signIn(provider, navigate)} providers={providers} />
    </AppProvider>
    </div>
  );
}
