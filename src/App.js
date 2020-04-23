import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/Header/Header.component';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import SignInPage from './pages/SignInPage/SignInPage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions'; 

const App = (props) => {

  let unsubscribeFromAuth = null;

  useEffect(() => {

    const { setCurrentUser } = props;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }

      return () => { unsubscribeFromAuth(); }
    })
  }, []);

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={
          () => props.currentUser
          ? <Redirect to='/'/>
          : <SignInPage/>}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
