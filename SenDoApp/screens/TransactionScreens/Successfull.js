import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import color from '../../constants/color'
import { StackActions, NavigationActions } from 'react-navigation';




export default class Successfull extends React.Component {

    Reset = () =>{
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          });
          this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <AntDesign name="checkcircleo" size={60} color='green' ></AntDesign>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', marginBottom: 5, marginTop: 5 }}>Sendo đã nhận được đơn hàng của bạn</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'orange' }}>0239682VTS</Text>
                </View>
                <View style={styles.middle}>
                </View>
                <View style={styles.footer}>

                    <TouchableOpacity onPress={this.Reset} style={styles.Button1}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>TIẾP TỤC MUA HÀNG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Button2}>
                        <Text style={{ fontSize: 18, color: 'dodgerblue' }}>XEM ĐƠN HÀNG</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 70,
      backgroundColor: 'white',
      padding: 8,
    },
    header: {
      flex: 0.3,
      alignItems: 'center',
    },
    middle: {
      flex: 0.4
    },
    footer: {
      flex: 0.3,
      alignItems: 'center',
      
    },
    Button1: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 350,
      height: 50,
      backgroundColor: color.darkPink,
      marginBottom: 15
    },
    Button2: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 350,
      height: 50,
      borderWidth: 2,
      borderColor: 'dodgerblue'
    }
  });
