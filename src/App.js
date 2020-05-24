import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import Header from './components/header';
import SignInUp from './pages/sign-In-Up';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
     if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
         userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      this.setState({currentUser: userAuth});
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
