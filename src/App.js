  import logo from './logo.svg';
  import './App.css';
  import React,{useState,useEffect} from 'react';
  import Country from './Components/Country/Country.js';

  function App() {

    const [count , setCount]= useState([]);

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

    const handle = () => {console.log('Country-Added')}; // add button for "eventhandler" :


    return (
      <div className="App">

        
        <h1>Countries Info : {count.length}</h1>
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
