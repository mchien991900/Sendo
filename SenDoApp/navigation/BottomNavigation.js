import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeStack from './HomeStack';
import AccountStack from './AccountStack';
import NotificationStack from './NotificationStack';
import CategoryStack from './CategogyStack';
import color from  '../constants/color';
import TransactionStack from './TransactionStack';

const bottomNavigator = createBottomTabNavigator({
    HomeStack,
    NotificationStack,
    CategoryStack,
    AccountStack,
    
    },
    {
        tabBarOptions: {
            activeTintColor: color.darkPink,
          
            style: {
              backgroundColor: '#EEEEEE',
            },
          }
    });

export default bottomNavigator;