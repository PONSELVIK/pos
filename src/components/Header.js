import React from 'react';
import { Box,Typography,Grid,Button  } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PinIcon from '@mui/icons-material/Pin';
import TranslateIcon from '@mui/icons-material/Translate';

function Header() {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Typography sx={{ flexGrow: 1 }}>
                    <Box
                        component="img"
                        src="https://mui.com/static/logo.png"
                        alt="MUI logo"
                        sx={{ width: { xs: 50 } }}
                    />
                </Typography>
                <Typography>
                    <IconButton
                        type="button"
                        aria-label="chat"
                        sx={{
                            display: { xs: 'inline', md: 'inline-block', color: 'rgb(40 83 216)' },
                        }}
                    >
                        <PinIcon />
                    </IconButton>
                </Typography>
                <Typography>

                    <IconButton
                        type="button"
                        aria-label="language"
                        sx={{
                            display: { xs: 'inline', md: 'inline-block', color: 'rgb(40 83 216)' },
                        }}
                    >
                        <TranslateIcon />
                    </IconButton>

                </Typography>
            </Box>
        </div>
    )
};
export default Header;
