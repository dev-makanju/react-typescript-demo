import List from './components/generics/List';
import './App.css';

function App() {

  return (
    <div className="App">
      <List
        items={['Batman','Batwoman','Batkids']} 
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
