import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles.js';
import Header from "./components/Header";
import Intro from "./components/Intro";
import Works from "./components/Works";
import Contact from "./components/Contact";


function App() {
  return (
  <Router>
    <GlobalStyles />
    <Switch>
      {/* <Route exact path="/"> */}
        <Header />
      {/* </Route> */}
      {/* <Route exact path="/">
        <Intro />
      </Route>
      <Route exact path="/">
        <Works />
      </Route>
      <Route exact path="/">
        <Contact />
      </Route> */}
    </Switch>
  </Router>
  )
}

export default App;
