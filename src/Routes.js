import React from 'react';
import {HashRouter, Route } from   'react-router-dom';
import Home from './component/Home';
import GameApp from './container/GameApp';
import PokeInfoContainer from './container/PokeInfoContainer';


const Routes = () => {
  return (
   
    <HashRouter>
      <Route  exact path= '/' component={Home} />
      <Route path='/pokemons'  component={GameApp} />
      <Route  exact path="/poke-info/:pokeIndex/:pokeName" component={PokeInfoContainer} />
    </HashRouter>   
    
  );
}

export default Routes;