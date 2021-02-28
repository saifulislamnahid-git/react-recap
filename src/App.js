import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Jasim', 'Shakib khan', 'Dibjol']
  return (
    <div className="App">
    <Nayok name={nayoks[0]}></Nayok>
    <Nayok name="Shakil"></Nayok>
    <Nayok name={nayoks[1]}></Nayok>
    <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
          
      </header>
    </div>
  );
}

function Nayok(props) {
  const nayokStyle={
    border: '2px solid purple',
    margin: '20px',
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami {props.name}</h1>
      <h3>I have started learning React JS</h3>
    </div>
  )
}

export default App;
