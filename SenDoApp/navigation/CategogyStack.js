import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import CategoryScreen from '../screens/CategoryScreens/CategoryScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeStack = createStackNavigator({
    Category: CategoryScreen
});

HomeStack.navigationOptions = {
    title: `Categories`,
    tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons
            name='apps'
            size={26}
            color={tintColor}
        />
    )

}


export default HomeStack;