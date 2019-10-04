import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ItemAcount from '../../component/Account/ItemAccount'
import HeaderAccount from '../../component/Account/HeaderAccount';
import { menuAccount, helpAccount } from '../../constants/util';
import color from  '../../constants/color';


export default class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Tài khoản',
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

  OnPress = (name) => {
   const {navigation} = this.props;
   if(name === 'favorite')
   {
    navigation.navigate('AccountFavorite');
   }
  }

  render() {
    //console.log(menuAccount)
    return (
      <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styleAccountScreen.container}>
        <View style={styleAccountScreen.part}>
          <HeaderAccount />
          
          {
          menuAccount.map(item => {
            return (
              <ItemAcount key={item.text} text={item.text} name={item.name} OnPress={this.OnPress} />
            )
          })
        }
        </View>

        <View style={styleAccountScreen.part}>
        {
          helpAccount.map(item => {
            return (
              <ItemAcount key={item.text} text={item.text} name={item.name} />
            )
          })
        }
        </View>

        <View style={styleAccountScreen.partEnd}>
          <ItemAcount name='exit-to-app' text='Log out'/>
        </View>

      </ScrollView>
    );
  }
};

const styleAccountScreen = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    flex: 1
    
  },
  part: {
    marginBottom:  30,
    backgroundColor: 'white',
   
  },

  partEnd:{
    backgroundColor: 'white',
    
  }
})
