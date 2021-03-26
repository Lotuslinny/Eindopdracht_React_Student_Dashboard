import React from 'react';
import './App.css';
import DashboardOverview from './DashboardOverview';
import {
  BrowserRouter as Router,  
} from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lin Ny's Winc Students Dashboard</h1>
      </header>
      <Router>
      <DashboardOverview />
      </Router>
    </div>
  );
}


export default App;