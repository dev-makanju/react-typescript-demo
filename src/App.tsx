import './App.css';
import List from './components/generics/List';
import RandomNumber from './components/restriction/RandomNumber';
import Button from './components/html/Button';

function App() {

  return (
    <div className="App">
      <List
        items={['Batman','Batwoman','Batkids']} 
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive={true} />
      <Button variant="primary">Click</Button>
    </div>
  );
}

export default App;
