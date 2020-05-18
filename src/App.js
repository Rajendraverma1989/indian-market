import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import Header from './components/header';

export const Hat = () => {
  return (
    <h1>Take Hats</h1>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop/hats" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
