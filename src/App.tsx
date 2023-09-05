import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Login from './components/state/Login';

function App() {

  return (
    <div className="App">
      <Button handleClick = {(event , id) => {
        console.log('button' , event , id);
      }}/>
      <Input styles={{ border:'1px solid red', padding: '5px'}} handleChange = { (event) => {
         console.log(event.target.value)
      }}/>
      <Login/>
    </div>
  );
}

export default App;
