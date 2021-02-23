import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name : "Fahim",
    Job : "Web Developer"
  }
  var person2 = {
    name : "Rahim",
    Job : "Web Developer"
  }
  var style ={
    color: "salmon",
    backgroundColor: "black"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1 className="" style={style}>My heading: {person.name + " " + person.Job} </h1>
        <h2 style ={{backgroundColor:"cyan"}}>Developer: {person2.name + " " + person.Job}</h2>
        <p>my first paragraph</p>
      </header>
    </div>
  );
}

export default App;
