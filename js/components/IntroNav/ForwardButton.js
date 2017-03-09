import React, { Component } from 'react';
import  {
    StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

export default class ForwardButton extends Component {
  render() {
    let { onPress, text, disabled } = this.props

    return (
      <TouchableOpacity style={styles.touchableOpacity} onPress={onPress} disabled={disabled} activeOpacity={disabled ? 1 : 0.7}>
        <Text style={styles.forwardText}>{text}</Text>
        <Text style={styles.arrow}>&rsaquo;</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  touchableOpacity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  arrow: {
    paddingRight: 15,
    color: '#B385FF',
    textAlign: 'center',
    fontSize: 45
  },
  forwardText: {
    color: '#B385FF',
    paddingTop: 10,
    paddingRight: 10,
    fontSize: 20,
    textAlign: 'center',
  }
})
