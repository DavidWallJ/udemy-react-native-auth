import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  onButtonPress () {
    const {email, password} = this.state;

    this.setState({ error: '' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch( (err) => {
        console.log(err);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch( (err) => {
            console.log(err);
            this.setState({ error: err.message });
          })
      })

  }

  // the onChangeHandler contains a function that will be passed an argument when evoked, 'email'.
  // 'email' will be what ever the 'onChangeText' event contains in 'Input.js'
  // the value of the email argument will set the email state property to it's value
  // 'secureTextEntry' on it's own results to true
  // if pass nothing it's false
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email:"
            value={this.state.email}
            onChangeHandler={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password:"
            value={this.state.password}
            onChangeHandler={password => this.setState({password})}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
            text="Log In"
          />
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm