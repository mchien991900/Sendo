import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class HeaderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity style={{alignItems: "center", width: 50, justifyContent: "center"}}>
          <FontAwesome name='search' size={24} color='#e91e63' />
      </TouchableOpacity>
    );
  }
}
