import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import TransactionScreen from '../screens/TransactionScreens/TransactionScreen'
import { Entypo } from '@expo/vector-icons';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    
});

HomeStack.navigationOptions = {
    title: `Home`,
    tabBarIcon: ({ tintColor }) => (
        <Entypo
            name='home'
            size={26}
            color={tintColor}
        />
    )

}


export default HomeStack;