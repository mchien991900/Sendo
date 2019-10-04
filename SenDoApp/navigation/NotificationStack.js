import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import NotificationScreens  from '../screens/NotificationScreens/NotificationScreen';

import { Ionicons } from '@expo/vector-icons';

const AccountStack = createStackNavigator({
    Notification: NotificationScreens
});

AccountStack.navigationOptions = {
    title: `Notification`,
    tabBarIcon: ({ tintColor }) => (
        <Ionicons
            name='md-notifications'
            size={27}
            color={tintColor}
        />
    )

}


export default AccountStack;