// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import DashboardLayout from './components/DashboardLayout';
// import Counter from './pages/Counter';
// import More from './pages/More';
// import Items from './pages/Items';
// import Today from './pages/Today';
// import Report from './pages/Reports'

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<DashboardLayout />}>
//                     <Route index element={<Counter />} />
//                     <Route path="counter" element={<Counter />} />
//                     <Route path="more" element={<More />} />
//                     <Route path="items" element={<Items />} />
//                     <Route path="today" element={<Today />} />
//                     <Route path="report" element={<Report />} />
//                 </Route>
//             </Routes>
//         </Router>
//     );
// };

// export default App;

// import React from 'react';
// import DashboardsLayout from './components/DashboardsLayout';
// import PrivateRoutes from './pages/PrivateRoutes';
// import AnonymousLayout from './components/AnonymousLayout';
// import MainLayout from './components/MainLayout';

// export const routes = [
//     {
//         layout: AnonymousLayout,
//         routes: [
//           {
//             name: 'login',
//             title: 'Login page',
//             component: Login,
//             path: '/login',
//             isPublic: true,
//           }
//         ]
//       },
//     {
//         layout: MainLayout,
//         routes: [
//           {
//             name: 'home',
//             title: 'Home page',
//             component: Home,
//             path: '/home'
//           },
//           {
//             name: 'users',
//             title: 'Users',
//             hasSiderLink: true,
//             routes: [
//               {
//                 name: 'list-users',
//                 title: 'List of users',
//                 hasSiderLink: true,
//                 component: ListUsers,
//                 path: '/users'
//               },
//               {
//                 name: 'create-user',
//                 title: 'Add user',
//                 hasSiderLink: true,
//                 component: CreateUser,
//                 path: '/users/new'
//               }
//             ]
//           }
//         ]
//       }
//     ];


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import DashboardsLayout from './components/DashboardsLayout';

// function App() {
//     return (
//         <Router>
//             <DashboardsLayout />
//         </Router>
//     );
// }

// ReactDOM.render(<App />, document.getElementById('root'));



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnonymousLayout from './components/AnonymousLayout';
import MainLayout from './components/MainLayout';
import { routes } from './components/routes';
import Login from './components/Login';
import NewUser from './components/NewUser';
import Tutorial from './components/Tutorial';

function App() {
    return (
    //     <Router>
    //     <Routes>
    //         {routes.map((layoutRoute, index) => (
    //             <Route
    //                 key={index}
    //                 path={layoutRoute.routes[0].path.split('/')[1]}
    //                 element={
    //                     layoutRoute.layout === AnonymousLayout ? (
    //                         <AnonymousLayout />
    //                     ) : (
    //                         <MainLayout />
    //                     )
    //                 }
    //             />
    //         ))}
    //     </Routes>
    // </Router>

    <Router>
            <Routes>
                {/* Define a route for AnonymousLayout, typically for public pages */}
                <Route path="" element={<AnonymousLayout />} />
                <Route path="newUser" element={<NewUser />} />
                <Route path="login" element={<Login />} />
                <Route path="tutorial" element={<Tutorial />} />


                {/* Define a route for MainLayout, typically for authenticated pages */}
                <Route path="/home" element={<MainLayout />} />
            </Routes>
        </Router>
    );
}

export default App;
