import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ApiTableLoader from './ApiTableLoader';
import ApiTableActions from './ApiTableActions';
import Home from './Home';

function App() {
  return (
    <>
    <Home/>
    <Router>
    <Routes>
        <Route path="/loader" element={<ApiTableLoader/>} />
        <Route path="/actions" element={<ApiTableActions/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;

