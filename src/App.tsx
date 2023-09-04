import './App.css';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Greet from './components/Greet';

function App() {

  return (
    <div className="App">
      <Heading>Hello Makanju</Heading>
      <Oscar>
        <Heading>Hello Makanju</Heading>
      </Oscar>
      <Greet name="femi" isLoggedIn={true}></Greet>
    </div>
  );
}

export default App;
