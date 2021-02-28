import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Nayok></Nayok>
    <Nayok></Nayok>
    <Nayok></Nayok>
    <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
          
      </header>
    </div>
  );
}

function Nayok() {
  const nayokStyle={
    border: '2px solid purple',
    margin: '20px',
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Saiful islam</h1>
      <h3>I have started learning React JS</h3>
    </div>
  )
}

export default App;
