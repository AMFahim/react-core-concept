import logo from './logo.svg';
import './App.css';

function App() {
  const lovers = ["Rahat", "Yakub", "Rakib"]
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "illustrator", price: "$60.99" },
    {name: "PDF Reader", price: "$6.99"}

  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am react person</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]} ></Product>
        <Product product={products[2]}></Product>

        <Person name={lovers[0]} GF="Riya"></Person>
        <Person name={lovers[1]} GF="Moni"></Person>
        <Person name={lovers[2]} GF="Fatema"></Person>
      </header>
    </div>
  );
}
function Person(props) {
  const personStyle = {
    border: "2px solid red",
    margin: "10px",
    borderRadius: "20px",
    padding: "20px",
    height: "200px",
    width: "200px",
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of {props.GF}</h3>
    </div>
  )
}
function Product(props2) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "20px",
    color: "black",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    margin: "10px"
  }
  const {name, price} = props2.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
