  import logo from './logo.svg';
  import './App.css';
  import React,{useState,useEffect} from 'react';
  import Country from './Components/Country/Country.js';
  import Cart from '../src/Components/Cart/Cart.js';

  function App() {

    const [count , setCount]= useState([]);
    const [cart, setCart]=useState([]); // use for show in top how many country are ADD on cart.
    

    useEffect(()=>{
        
        
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data =>{ 

          setCount(data);

          console.log(data);

          const names = data.map(count => count.name)

          console.log(names);
        })
      .catch(error => console.log(error))
      
      
    },[])

    const handle = (count) => {
      
      const newCart =[...cart, count]; //  when make click on button then upside show country number . how many country are ADDAD

      setCart(newCart);

      
      console.log('Country-Added', count)}; // add button for "eventhandler" @ now make this one multiline and put count inside the braket:


    return (
      <div className="App">

        
        <h1>Countries Info : {count.length}</h1>
        <p>Country added:{cart.length}</p>
        <Cart cart={cart}></Cart>
        <ul>

              {

                count.map( count => <Country count={count} handle = {handle}> </Country> )
              }

              </ul>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  export default App;
