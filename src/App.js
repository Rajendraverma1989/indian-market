import React from 'react';
import './App.css';
import Homepage from './pages/homepage';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop'

export const Hat = () => {
  return (
    <h1>Take Hats</h1>
  )
}

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
