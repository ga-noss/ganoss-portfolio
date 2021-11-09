import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/projects">
                <Projects />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>

              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
