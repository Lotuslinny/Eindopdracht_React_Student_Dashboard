import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const Routing = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/:id" children={<Child key={props.student} />} onChange={props.getChartData} />
      </Switch>
    </Router>
  )
}
function Child(props) {
  let { id } = useParams();
  props.getChartData({ id })
  return (
    props.getChartData({ id })
  );
}

export default Routing;