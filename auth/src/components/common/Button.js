/**
 * Created by david on 7/17/17.
 */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// 'onPress' is being pulled off of props
// 'onPress' is defined up in 'AlbumDetails'
// you could also just pass down the children prop instead of the text prop since there is only text inside the button
const Button = ( { onPress, text }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={ onPress } style={buttonStyle}>
      <Text style={textStyle}>
        { text }
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // flex 1 expands the button
    flex: 1,
    // flex box stretch to fill the limits of the container
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };

