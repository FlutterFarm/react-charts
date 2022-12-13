import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />          
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
