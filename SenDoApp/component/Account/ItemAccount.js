import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import color from  '../../constants/color';


export default class ItemAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressIn: false,

    };
  }


  render() {
    const { text, name } = this.props;

    return (
      <TouchableWithoutFeedback
        onPressIn={() => this.setState({ pressIn: true })}
        onPressOut={() => this.setState({ pressIn: false })}
        onPress={() => {this.props.OnPress(name)}}
      >
        <View style={this.state.pressIn ? styleItemAccount.itemWrapperPressIn : styleItemAccount.itemWrapperPressOut}
        >
          <View style={styleItemAccount.iconWrapper}>
            <MaterialIcons name={name} size={32} color={color.darkPink} />
          </View>
          <View style={styleItemAccount.contentWrapper}>
            <Text style={styleItemAccount.textItemAccount}>{text}</Text>
          </View>
          <View style={styleItemAccount.iconWrapper}>
            <MaterialIcons name='navigate-next' size={40} color={color.darkPink} />
          </View>
        </View>

      </TouchableWithoutFeedback>
    );
  }
}

const styleItemAccount = StyleSheet.create({
  itemWrapperPressOut: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 15,
    backgroundColor: 'white',
  },

  itemWrapperPressIn: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 15,
    backgroundColor: '#EEEEEE'
  },

  itemWrapperPressOn: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 15,
    backgroundColor: 'blue',
  }
  ,

  iconWrapper: {
    width: '15%',
    justifyContent: "center",
    alignItems: "center"
  },
  contentWrapper: {
    justifyContent: 'center',
    width: '70%',

  },

  textItemAccount: {
    fontSize: 24,
    fontWeight: '400'
  }
})
