/**
 * Created by david on 7/15/17.
 */
import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Header extends Component {
  render () {
    const {textStyle, viewStyle} = styles
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
}

export { Header };