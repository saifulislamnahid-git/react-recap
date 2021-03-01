import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])

  // const nayoks = [
  //   {name: 'Jasim', year: 2}, 
  //   {name:'Shakib khan', year: 1}, 
  //   {name: 'Dibjol', year: 3}
  // ]
  return (
    <div className="App">
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} username={nk.username}></Nayok>)
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
      <h1>আমি {props.name}</h1>
      <h3>আমার ইউজারনেম হচ্ছে {props.username}</h3>
    </div>
  )
}

export default App;
