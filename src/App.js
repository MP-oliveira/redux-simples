import './App.css';

import Intervalo from './components/Intervalo'
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-redux</h1>
      <div className="linha">
        <Intervalo></Intervalo>
        <Card  title='Card 2'green>Y</Card>
      </div>
      <div className="linha">
        <Card  title='Card 3'Blue>W</Card>
        <Card  title='Card 4'Purple>Z</Card>
      </div>
    </div>
  );
}

export default App;
