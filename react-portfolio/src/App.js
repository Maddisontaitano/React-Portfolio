import './App.css';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Cards from './components/cards/cards';
import Footer from './components/footer/footer';
import Work from './components/work';

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
// import Home from "./components/pages/Home";
import About from "./components/intro/intro";
import Blog from "./components/cards/cards";
import Contact from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
        <Router>
        <div>
          <NavTabs />
          <Route exact path="/about-me" component={About} />
          <Route exact path="/work" component={Blog} />
          <Route path="/contact-me" component={Contact} />
        </div>
      </Router>
      <Intro />
      <Work />
      <Cards /> 
      <Footer />
    </div>
  );
}


export default App;
