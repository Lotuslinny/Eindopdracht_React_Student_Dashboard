import React from 'react';
import './App.css';
import DashboardOverview from './DashboardOverview';

const App = () => {
  //const { data } = this.state
  // https://formidable.com/open-source/victory/docs/victory-bar/
  return (
    <div className="App">
      <h1>Hai, here comes the BarChart...!</h1>
      <DashboardOverview />
    </div>
  );
}


export default App;