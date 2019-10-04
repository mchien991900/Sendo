import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import color from '../../constants/color';
import {loaiSPUaThich} from '../../constants/util';
import ListItemFavorite from '../../component/Account/ListItemFavorite';

const {height, width} = Dimensions.get('window');

const data = [{
  value: 'Nam',
}, {
  value: 'Nữ',
}];

export default class AccountFavoriteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: ''
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
      <View style={accountFavoriteScreen.container}>
        <View style={accountFavoriteScreen.dropDownsWrapper}>
          <View style={accountFavoriteScreen.itemDropdownWrapper}>

            <Dropdown
              baseColor={color.darkPink}
              //textColor={color.darkPink}
              label='Gender'
              data={data}
            />

          </View>
          <View style={{justifyContent: 'flex-end', alignItems: "center"}}>
            <View style={{
              borderWidth: 1,
              borderColor: color.darkPink, height: 35,
            }}></View>
          </View>


          <View style={accountFavoriteScreen.itemDropdownWrapper}>

            <Dropdown
              baseColor={color.darkPink}
              //textColor={color.darkPink}
              label='Kind'

            />

          </View>

          <View style={{justifyContent: 'flex-end', alignItems: "center"}}>
            <View style={{
              borderWidth: 1,
              borderColor: color.darkPink, height: 35,
            }}></View>
          </View>
          <View style={accountFavoriteScreen.itemDropdownWrapper}>

            <Dropdown
              
              baseColor={color.darkPink}
              //textColor={color.darkPink}
              label='Location'

            />

          </View>
        </View>

        <ListItemFavorite  list={loaiSPUaThich}/>

        
      </View>
    );
  }
}

const accountFavoriteScreen = StyleSheet.create({
  container: {
    
  },

  dropDownsWrapper: {
   // justifyContent: "center",
   // alignItems: "center",
   


  },

  itemDropdownWrapper: {
   
    width: width*0.25,

  },


  dropDownsWrapper: {
    justifyContent: "center",
    // alignItems: "center",
  
    flexDirection: "row",
    width: width,
    paddingHorizontal: 20,
    paddingBottom: 10,
    justifyContent: 'space-around',
  }


})
