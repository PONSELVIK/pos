import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import Header from './Header';
import { Box } from '@mui/material';

// preview-start
const providers = [
  { id: 'google', name: 'Google' },
  { id: 'facebook', name: 'Facebook' },
];

// preview-end

const signIn = async (provider) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

export default function Login() {
  return (
          <div>
          <Header />
           <Box sx={{height:'30vh'}}>

            </Box>
    <AppProvider>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
    </div>
  );
}
