import React, { Component } from 'react';
import './App.css';
import DashboardOverview from './DashboardOverview';
//import { VictoryChart, VictoryTheme, VictoryBar } from "victory";
class App extends Component {
  render() {
    //const { data } = this.state
    // https://formidable.com/open-source/victory/docs/victory-bar/
    return (

      <div className="App">
        <DashboardOverview />
        {/* <header className="App-header">
          <h1 className="App-title" >Student Dashboard</h1>
        </header> */}

        {/* <VictoryChart
          theme={VictoryTheme.material} domainPadding={10} >
          <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            data={data}
            x="assignment"
            y="difficultylevel" //create average number for common assignments...?
          />
        </VictoryChart>
        <div id="details">
          {
            data.map(obj => {
              return (
                <div key={obj.id}>
                  <p>
                    {obj.name} -
                  {obj.assignment} -
                  {obj.difficultylevel} -
                  {obj.funlevel}</p>
                </div>
              )
            })
          }
        </div> */}
      </div>
    );
  }
}

export default App;