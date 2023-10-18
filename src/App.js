import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="container-fluid App">
      <img className="home-background-pic" src="./images/Design.png" alt="img" />
      <Header />
      <Home />
    </div>
  );
}

export default App;
