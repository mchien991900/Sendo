import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginStack from './LoginStack';
import BottomNavigator from './BottomNavigation';
import TransactionScreen from '../screens/TransactionScreens/TransactionScreen';
import LoginScreen from '../screens/LoginScreens/LoginScreen';
import SignupScreen from '../screens/LoginScreens/SignUpScreen';
import SuccessfulScreen from '../screens/TransactionScreens/Successfull'



const appContainer = createAppContainer(
    createStackNavigator({
        Login: LoginScreen,
        Signup: SignupScreen,
        Main: BottomNavigator,
        Transaction: TransactionScreen,
        Successful: SuccessfulScreen
        
    },
    {
        headerMode: 'none',
        initialRouteName: 'Login',
    }
    )
)

export default appContainer;