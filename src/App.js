import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Rewards from './components/Rewards';
import Skills from './components/Skills';

function App() {
  return (
    <div className="container-fluid App">
      <img className="home-background-pic" src="./images/Design.png" alt="img" />
      <Header />
      <Home />
      <Rewards />
      <Skills />
    </div>
  );
}

export default App;
