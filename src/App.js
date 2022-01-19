import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import Header from './components/header';
import SignInUp from './pages/sign-In-Up';
import CheckOutPage from './pages/checkout/inde';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import { setCurrentUser } from './redux/user/user-action';
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
     if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
         userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      }

      setCurrentUser(userAuth);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path = '/checkout' component={CheckOutPage} />
        <Route exact path='/signin' render={() => currentUser? (<Redirect to= '/' />): <SignInUp />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
      setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
