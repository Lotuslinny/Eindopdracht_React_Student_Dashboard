import React from "react";
import { VictoryBar } from "victory"

const VictoryChart = (props) => {
  return (
    <div>

      <VictoryBar
        //style={{ data: { fill: "#c43a31" } }}
        data={props.data}
        x="assignment"
        y="difficultylevel" //create average number for common assignments...?
      />

      <h1>Ik ben de BarChart</h1>
    </div>
  )
}

export default VictoryChart;