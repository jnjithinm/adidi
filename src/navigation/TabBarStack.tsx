import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import TabBar from '../components/TabBar/TabBar';
import CreateInvoice from '../screens/createInvoice/CreateInvoice';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
                keyboardHidesTabBar: true,
            })}
            tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="CreateInvoice" component={CreateInvoice} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
