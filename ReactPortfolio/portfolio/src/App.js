import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { BackEnd } from "./components/pages/BackEnd";
import { FrontEnd } from "./components/pages/FrontEnd";
import { Portfolio } from "./components/pages/Portfolio";



function App() {
  return (
    <Router>
      <>
      <NavBar />
  <Routes>
          <Route exact path='/' component= {Home} />
          <Route path='/about' component={About} />
          <Route path='/frontend' component={BackEnd} />
          <Route path='/backend' component={FrontEnd} />
          <Route path='/portfolio' component={Portfolio} />
    </Routes>
  </>
    </Router>

  );
}

export default App;
