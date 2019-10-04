import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { Entypo, AntDesign, MaterialCommunityIcons } from 'react-native-vector-icons';
import color from '../../constants/color'

export default class SignUpScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return{
            header: null,
    }
    }

    NavigateLoginButton = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.Logo} source={require('../../assets/sendoLogo.jpg')} />
                <TextInput style={styles.TextInput} placeholder="Phone number or Email" placeholderTextColor='gray' />
                <TextInput style={styles.TextInput} placeholder="User name" placeholderTextColor='gray' />
                <TextInput style={styles.TextInput} placeholder="Password" secureTextEntry={true} placeholderTextColor='gray' />
                <TextInput style={styles.TextInput} placeholder="Repeat Password" secureTextEntry={true} placeholderTextColor='gray' />
                <TouchableOpacity style={styles.LoginButton}>
                    <Text style={styles.LoginText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.textOr}>
                    <View style={{ marginRight: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: 'grey', width: 105, height: 0 }} />
                    <View>
                        <Text style={{color:'grey'}}>OR</Text>
                    </View>
                    <View style={{ marginLeft: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: 'grey', width: 105, height: 0 }} />
                </View>

{/* 
                <View style={styles.buttonformat}>
                    <TouchableOpacity>
                        <Entypo name="facebook-with-circle" onPress={this.LoginWithFacebook} size={30} color='blue'></Entypo>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ width: 80, height: 30, }} source={require('../../assets/sendoLogo.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="gmail" onPress={this.LoginWithGoogle} size={30} color='red' />
                    </TouchableOpacity>
                </View> */}
                {/* <Button style={styles.ForgotPwText} onPress={this.ForgotPassword} title='Fogot Password?' color='grey' size={14} fontWeight='bold' /> */}

                <View style={styles.Register}>
                    <Text style={{ fontSize: 17 }}>Already have an account?</Text>
                    <Button style={styles.ForgotPwText} color={color.darkPink}  onPress={this.NavigateLoginButton} title='LOGIN NOW!?' fontWeight='600' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8,
    },
    Logo: {
        width: 200,
        height: 50
    },
    TextInput: {
        padding: 10,
        marginTop: 20,
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: color.darkPink,
        borderRadius: 5
    },
    LoginButton: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: color.darkPink,
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    LoginText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonformat: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250
    },
    ForgotPwText: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 15,
        textDecorationLine: 'underline',
        color: 'blue'
    },
    Register: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    textOr: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
