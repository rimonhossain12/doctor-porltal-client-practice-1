import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Home/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <Home/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
