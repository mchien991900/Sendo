import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreens/LoginScreen';
import SignUpScreen from '../screens/LoginScreens/SignUpScreen';

const LoginStack = createStackNavigator({
    Login: LoginScreen,
    SignUp: SignUpScreen,

},
    {
        initialRouteName: 'LoginScreen',
    })

export default LoginStack;