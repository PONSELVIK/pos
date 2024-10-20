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

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardsLayout from './components/DashboardsLayout';

function App() {
    return (
        <Router>
            <DashboardsLayout/>
        </Router>
    );
}

export default App;


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
