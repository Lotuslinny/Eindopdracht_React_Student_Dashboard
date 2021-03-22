import React from 'react';
import './App.css';
import DashboardOverview from './DashboardOverview';

const App = () => {
  //const { data } = this.state
  // https://formidable.com/open-source/victory/docs/victory-bar/
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lin Ny's Winc Students Dashboard</h1>
      </header>
      <DashboardOverview />
    </div>
  );
}


export default App;