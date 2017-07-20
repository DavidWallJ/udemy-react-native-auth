import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDXcemd-pX-3g2J4SxakQddsT5lNnoZ_6A",
      authDomain: "udemy-react-native-auth-76767.firebaseapp.com",
      databaseURL: "https://udemy-react-native-auth-76767.firebaseio.com",
      projectId: "udemy-react-native-auth-76767",
      storageBucket: "udemy-react-native-auth-76767.appspot.com",
      messagingSenderId: "584400790082"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm/>
      </View>
    );
  }
}

export default App;