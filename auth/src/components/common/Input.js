import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

// Udemy react native and redux course.  lectures: 64-65

// we're calling the onChangeHandler function from where ever the input is used so that we can get access to it's state text value
// if we pass nothing to 'sercureTextEntry' it becomes false

const Input = ( { label, value, onChangeHandler, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
  <View style={containerStyle}>
    <Text style={labelStyle}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCorrect={false}
      style={inputStyle}
      value={value}
      onChangeText={onChangeHandler}
    />
  </View>
  )
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3
  },
  labelStyle: {
    height: 20,
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input }