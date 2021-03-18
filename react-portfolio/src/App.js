import './App.css';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Cards from './components/cards/cards';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <Header />
        <Intro />
          <Cards />
      <Footer />
    </div>
  );
}


export default App;
