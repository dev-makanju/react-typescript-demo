import './App.css';
import List from './components/generics/List';
import RandomNumber from './components/restriction/RandomNumber';

function App() {

  return (
    <div className="App">
      <List
        items={['Batman','Batwoman','Batkids']} 
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive={true} />
    </div>
  );
}

export default App;
