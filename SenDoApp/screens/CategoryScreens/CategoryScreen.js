import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import color from '../../constants/color';
import {loaiSPUaThich} from '../../constants/util';
import ListItemFavorite from '../../component/Account/ListItemFavorite';


export default class CategotyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'nam'
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Sở thích',
      headerStyle: {
        backgroundColor: '#FFF',
      },
      headerTintColor: color.darkPink,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },

    };
  };

  render() {

    return (
      <View style={categotyScreen.container}>
        
       <ListItemFavorite  list={loaiSPUaThich}/>
      </View>
    );
  }
}

const categotyScreen = StyleSheet.create({
  container: {
    justifyContent: "center",

  },




})
