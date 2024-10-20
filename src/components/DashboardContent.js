// src/components/DashboardContent.js
import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../pages/Counter';
import Items from '../pages/Items';
import Today from '../pages/Today';
import Reports from '../pages/Reports';
import More from '../pages/More';

function DashboardContent( {pathname}) {
    const decodedPathname = decodeURIComponent(pathname);

    switch (pathname) {
        case '/counter':
            return <Counter />; 
        case '/items':
            return <Items />; 
        case '/today':
            return <Today />; 
        case '/reports':
            return <Reports />; 
        case '/more':
            return <More />; 
        default:
            return <div>Welcome to the {decodedPathname}!</div>;
    }
}

DashboardContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

export default DashboardContent;
