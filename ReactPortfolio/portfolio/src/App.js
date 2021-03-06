import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { BackEnd } from "./components/pages/BackEnd";
import { FrontEnd } from "./components/pages/FrontEnd";
import { Portfolio } from "./components/pages/Portfolio";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <>
      <NavBar />
  <Routes>
          <Route exact path='/' element= {<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/backend' element={<BackEnd/>} />
          <Route path='/frontend' element={<FrontEnd/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
    </Routes>
    <Footer />
  </>
    </Router>

  );
}

export default App;
