import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import AccoutScreen from '../screens/AccountScreens/AccountScreen';
import AccountFavoriteScreen from '../screens/AccountScreens/AccountFavoriteScreen'

import { MaterialIcons } from '@expo/vector-icons';

const AccountStack = createStackNavigator({
    Account: AccoutScreen,
    AccountFavorite: AccountFavoriteScreen
});

AccountStack.navigationOptions = {
    title: `Account`,
    tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
            name='account-circle'
            size={26}
            color={tintColor}
        />
    )

}


export default AccountStack;