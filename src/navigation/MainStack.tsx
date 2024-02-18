import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from 'utils/helpers/navigationHelper';
import TabBarStack from './TabBarStack';
import SignIn from 'screens/signin/SignIn';
import OTP from 'screens/otp/OTP';
import Registration from 'screens/registration/Resgistration';
import Splash from 'screens/splash/Splash';

export type MainStackParamList = {
    Home: undefined;
    Profile: undefined;
    CreateInvoice: undefined;
};

export type AuthenticationMethod = 'Mobile Number' | 'Email';
export type ModifiedMainStackParamList = MainStackParamList & {
    TabBarStack: undefined;
    Splash: undefined;
    SignIn: undefined;
    OTP: { authenticationMethod: AuthenticationMethod; value: string };
    Registration: undefined;
};

const MainStack = createStackNavigator<ModifiedMainStackParamList>();

const MainStackNavigator = () => {
    const routeNameRef = React.useRef<string | undefined>();
    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                routeNameRef.current =
                    navigationRef?.current?.getCurrentRoute()?.name ||
                    'DefaultRouteName';
            }}>
            <MainStack.Navigator screenOptions={{ headerShown: false }}>
                <MainStack.Screen name="Splash" component={Splash} />
                <MainStack.Screen name="SignIn" component={SignIn} />
                <MainStack.Screen name="OTP" component={OTP} />
                <MainStack.Screen
                    name="Registration"
                    component={Registration}
                />
                <MainStack.Screen name="TabBarStack" component={TabBarStack} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};

export default MainStackNavigator;
