import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import TransactionScreen from '../screens/TransactionScreens/TransactionScreen';
import { Entypo } from '@expo/vector-icons';

const TransactionStack = createStackNavigator({
    Transaction: TransactionScreen
});




export default TransactionStack;