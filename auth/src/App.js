import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // null means we're not sure
  // a state we can use for logging in (...loading)
  state = {loggedIn: null}

  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDXcemd-pX-3g2J4SxakQddsT5lNnoZ_6A',
      authDomain: 'udemy-react-native-auth-76767.firebaseapp.com',
      databaseURL: 'https://udemy-react-native-auth-76767.firebaseio.com',
      projectId: 'udemy-react-native-auth-76767',
      storageBucket: 'udemy-react-native-auth-76767.appspot.com',
      messagingSenderId: '584400790082'
    })

    // when ever the user signs in or out run this function
    // user argument will be an object that represents user
    // or it will be null
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })

  }

  renderContent () {

    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button
                text="Log Out"
                onPress={() => firebase.auth().signOut()}
              />
            </CardSection>
          </Card>
        )
      case false:
        return <LoginForm/>
      default:
        return (
          <View>
              <Spinner size="large"/>
          </View>
        )
    }
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" style={styles.center}/>
        {this.renderContent()}
      </View>
    )
  }
}


export default App