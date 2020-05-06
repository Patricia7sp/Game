import React  from "react";
import '../App.css'; 
import logo from '../logo.svg';
import { Link } from "react-router-dom";



const Home = () => {

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        
        <header className="App-header">
          <h1>Pokemon GO </h1>
          <Link to='/pokemons'> Click Para Ver Pokemons </Link>
        </header>

      </div>

     
    );
}

export default Home;