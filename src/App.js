import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = [
    {name: 'Jasim', year: 2}, 
    {name:'Shakib khan', year: 1}, 
    {name: 'Dibjol', year: 3}
  ]
  return (
    <div className="App">
      {
        nayoks.map(nk => <Nayok name={nk.name} year={nk.year}></Nayok>)
      }
      <MovieCounter></MovieCounter>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
          
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(1);
  const movieCountHandle = () => setCount(count+1);
  return (
    <div>
      <button onClick={movieCountHandle}>Add Movie</button>
      <h3>Number of movies: {count}</h3>
    </div>
  )
}

function Nayok(props) {
  const nayokStyle={
    border: '2px solid purple',
    margin: '20px',
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami {props.name}</h1>
      <h3>I have started learning React JS last {props.year} year</h3>
    </div>
  )
}

export default App;
