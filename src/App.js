import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Fahim",
    Job: "Web Developer"
  }
  var person2 = {
    name: "Rahim",
    Job: "Web Developer"
  }
  var style = {
    color: "salmon",
    backgroundColor: "black"
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>I am react person</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person() {
  // const personStyle={
  //  border: "2px solid red",
  //  margin: "10px",
  //  borderRadius:"20px"
  // }
  // or{return korar por , style ta use korte hobe}
  return (
    <div style={ {border: '2px solid yellow',margin: '10px', borderRadius: '20px'}}>
      <h1>Name: Abdul Mozid Fahim</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}
export default App;
