import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import color from '../../constants/color';

export default class ItemHorizontal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {data} = this.props;
      const {name, url, img} = data;
    return (
      <TouchableOpacity onPress={this.props.OnPress} style={itemHorizontal.container}>
          <Image source={{uri: img}} style={itemHorizontal.imgStyle} />
          <Text style={itemHorizontal.textStyle}>{name}</Text>
       
      </TouchableOpacity>
    );
  }
}

const itemHorizontal = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        
    
        margin: 10,
        
    },

    textStyle: {
        fontSize: 14,
        fontWeight: '600',
    },

    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 20,
        margin: 10
    }

})
