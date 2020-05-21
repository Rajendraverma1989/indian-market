import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import Header from './components/header';
import SignInUp from './pages/sign-In-Up';
import { auth } from './firebase/firebase-utils';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
   this.unsubscribeFromAuth= auth.onAuthStateChanged( user =>{
      this.setState({
        currentUser: user
      });
      console.log(user);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser= {this.state.currentUser} />
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={ShopPage} />
        <Route psth="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
