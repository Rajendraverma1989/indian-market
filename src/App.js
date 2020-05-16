import React from 'react';
import './App.css';
import Homepage from './pages/homepage';
import { Switch, Route} from 'react-router-dom';

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
      <Route exact path="/shop/hats" component={Hat} />
      </Switch>
    </div>
  );
}

export default App;
