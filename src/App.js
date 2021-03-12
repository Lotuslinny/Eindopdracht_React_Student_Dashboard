import React, { Component } from 'react';
import './App.css';
import Tabletop from "tabletop";
import { VictoryChart, VictoryTheme, VictoryBar } from "victory";

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    Tabletop.init({
      key: '1Pv1p4vwOe8ZKetA7ealHn-Ulbxp0ycJWwSlF2NZylEE',
      //key: '1Bh5AV7LwiiWOlK6G-kVDX8YiWJNEyLrrYU6WEYnb_lg',

      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }
  render() {
    const { data } = this.state
    // https://formidable.com/open-source/victory/docs/victory-bar/
    return (
      <div className="App">
        <VictoryChart
          theme={VictoryTheme.material} domainPadding={10} >
          <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            data={data}
            x="assignment"
            y="difficultylevel" //create average number for common assignments...?
          />
        </VictoryChart>
        <header className="App-header">
          <h1 className="App-title">React + Google Sheets Demo</h1>
        </header>
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
        </div>
      </div>
    );
  }
}

export default App;