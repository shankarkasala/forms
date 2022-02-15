import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Edit from "./Edit";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/edit" component={Edit} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
