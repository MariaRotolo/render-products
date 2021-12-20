import {useState, useEffect} from "react";
//import useFetch from "use-http";
import './App.css';
import {RenderedProducts } from "./components/RenderedProducts/index.jsx";




function App() {
  const [data, setdata] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setdata);
  }, [])

  
  return (
    <div className="App">
      <RenderedProducts/>
    </div>
  );
}

export default App;
