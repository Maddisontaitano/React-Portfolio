import './App.css';
import header from './components/header/header';
import intro from './components/intro/intro';
import cards from './components/cards/cards';
import footer from './components/footer/footer';

function App() {
  return (
    <div>
      <header />
        <intro />
          <cards />
      <footer />
    </div>
  );
}


export default App;
