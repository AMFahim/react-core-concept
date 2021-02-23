import logo from './logo.svg';
import './App.css';

function App() {
  const lovers =["Rahat", "Yakub", "Rakib"]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am react person</p>
        <Person name={lovers[0]} GF="Riya"></Person>
        <Person name="Yakub" GF="Moni"></Person>
        <Person name="Rakib" GF="Fatema"></Person>
      </header>
    </div>
  );
}
function Person(props) {
  const personStyle={
   border: "2px solid red",
   margin: "10px",
   borderRadius:"20px",
   padding: "20px"
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of {props.GF}</h3>
    </div>
  )
}
export default App;
