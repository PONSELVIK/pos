import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import DashboardContent from './DashboardContent';
import Divider from '@mui/material/Divider';


import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PinIcon from '@mui/icons-material/Pin';


import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import { Link } from 'react-router-dom';


const SidebarItems = () => (
    <div>
        {NAVIGATION.map((item, index) => (
            item.kind === 'divider' ? <Divider key={index} /> :
                item.kind === 'header' ? <Typography key={index}>{item.title}</Typography> :
                    <Link to={`/${item.segment}`} key={index}>
                        <Tooltip title={item.title}>
                            <IconButton>{item.icon}</IconButton>
                        </Tooltip>
                    </Link>
        ))}
    </div>
);

const NAVIGATION = [
    {
        segment: 'counter',
        title: 'Counter',
        icon: <PointOfSaleRoundedIcon />,
    },
    {
        segment: 'items',
        title: 'Items',
        icon: <ListOutlinedIcon />,
    },
    {
        segment: 'today',
        title: 'Today',
        icon: <MonetizationOnRoundedIcon />,
    },
    {
        segment: 'reports',
        title: 'Reports',
        icon: <AutoGraphRoundedIcon />,
    },
    {
        segment: 'more',
        title: 'More',
        icon: <DashboardIcon />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Management',
    },
    {
        segment: 'helpchat',
        title: 'Help Chat',
        icon: <DashboardIcon />,
    },
    {
        segment: 'inventory management',
        title: 'Inventory Management',
        icon: <DashboardIcon />,
    },
    {
        segment: 'add expences',
        title: 'Add Expenses',
        icon: <DashboardIcon />,
    },
    {
        segment: 'receipt',
        title: 'Receipt',
        icon: <DashboardIcon />,
    },
    {
        segment: 'customer management',
        title: 'Customer management',
        icon: <DashboardIcon />,
    },
    {
        segment: 'staff management',
        title: 'Staff Management',
        icon: <DashboardIcon />,
    },
    {
        segment: 'shopfront',
        title: 'ShopFront',
        icon: <DashboardIcon />,
    },
    {
        kind: 'divider',
    },
    {
        segment: 'share',
        title: 'Share',
        icon: <DashboardIcon />,
    },
    {
        segment: 'archive',
        title: 'Archive',
        icon: <DashboardIcon />,
    },
    {
        segment: 'webbackoffice',
        title: 'Web Back Office',
        icon: <DashboardIcon />,
    },
    {
        segment: 'feedback',
        title: 'FeedBack',
        icon: <DashboardIcon />,
    },
    {
        segment: 'buyprinter',
        title: 'Buy Printer',
        icon: <DashboardIcon />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Other apps',
    },
    {
        segment: 'kitchen display',
        title: 'Kitchen Display(KDS)',
        icon: <DashboardIcon />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Settings',
    },
    {
        segment: 'language',
        title: 'Language',
        icon: <DashboardIcon />,
    },
    {
        segment: 'receipt settings',
        title: 'Receipt Settings',
        icon: <DashboardIcon />,
    },
    {
        segment: 'businness settings',
        title: 'Receipt Settings',
        icon: <DashboardIcon />,
    },
    {
        segment: 'general settings',
        title: 'General settings',
        icon: <DashboardIcon />,
    },
    {
        segment: 'logout',
        title: 'Logout',
        icon: <DashboardIcon />,
    }
];


function ToolbarIcons() {
    return (
        <React.Fragment>
            <Box
            // sx={{
            //     display: 'flex',
            //     justifyContent: 'flex-end',
            //     alignItems: 'center',
            //     gap: { xs: '8px', md: '16px' }, // Adjusting gap based on screen size
            // }}
            >
                <Tooltip title="Chat" enterDelay={1000}>
                    <IconButton
                        type="button"
                        aria-label="chat"
                        sx={{
                            display: { xs: 'inline', md: 'inline-block' },

                        }}
                    >
                        <PinIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Help" enterDelay={1000}>
                    <IconButton
                        type="button"
                        aria-label="help"
                        sx={{
                            display: { xs: 'inline', md: 'inline-block' },

                        }}
                    >
                        <HelpIcon />
                    </IconButton>
                </Tooltip>


                <Tooltip title="Profile" enterDelay={1000}>
                    <IconButton
                        type="button"
                        aria-label="help"
                        sx={{
                            display: { xs: 'inline', md: 'inline-block' },

                        }}
                    >
                        <PersonAddIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Cloud Status" enterDelay={1000}>
                    <IconButton
                        type="button"
                        aria-label="cloud"
                        sx={{
                            display: { xs: 'inline', md: 'inline-block' },

                        }}
                    >
                        <CloudDoneIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </React.Fragment>
    );
}

const demoTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: 'rgb(40 83 216)',
            contrastText: '#ffffff'
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(40 83 216)',
                    // color: '#ffffff',
                    contrastText: '#ffffff',
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                },
            },
        },
        // MuiTypography:{
        //     styleOverrides: {
        //         root: {
        //             contrastText: '#fffff',// Set icon color in AppBar to white
        //         },
        //     },
        // }
        // MuiButton: {
        //     styleOverrides: {
        //         root: {
        //             color: '#ffffff', // Button text color (white)
        //         },
        //     },
        // },
    },
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});



function DashboardsLayout(props) {
    const { window } = props;

    const [session, setSession] = React.useState({
        user: {
            name: 'Bharat Kashyap',
            mobile: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
        },
    });

    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession({
                    user: {
                        name: 'Bharat Kashyap',
                        email: 'bharatkashyap@outlook.com',
                        image: 'https://avatars.githubusercontent.com/u/19550456',
                    },
                });
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);
    const [pathname, setPathname] = React.useState('/counter');

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    const demoWindow = window !== undefined ? window() : undefined;

    return (
        <AppProvider
            session={session}
            authentication={authentication}
            navigation={NAVIGATION}
            branding={{
                logo: <img src="https://mui.com/static/logo.png" alt="MUI logo"/>,

                title:
                        'Bizstack POS'

            }}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout slots={{ toolbarActions: ToolbarIcons }}>
                {/*<SidebarItems />*/}
                <DashboardContent pathname={pathname} />
            </DashboardLayout>
        </AppProvider>
    );
}

DashboardsLayout.propTypes = {
    window: PropTypes.func,
};

export default DashboardsLayout;
