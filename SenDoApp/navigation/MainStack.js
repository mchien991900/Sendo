import { createStackNavigator } from 'react-navigation-stack';
import BottomNavigator from './BottomNavigation';
import TransactionContainer from '../screens/TransactionScreens/TransactionScreen';
import SignUpContainer from '../screens/LoginScreens/SignUpScreen';

const mainStack = createStackNavigator({
    MainNav: { screen: BottomNavigator },
    TransactionScreen: { screen: TransactionContainer }
})

export default mainStack;