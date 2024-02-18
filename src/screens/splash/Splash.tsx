import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Icon from 'components/Icon/Icon';
import Layout from 'components/Layout/Layout';
import { ModifiedMainStackParamList } from 'navigation/MainStack';
import styles from './Splash.styles';

type SplashNavigationProp = StackNavigationProp<
    ModifiedMainStackParamList,
    'Splash'
>;
type SplashRouteProp = RouteProp<ModifiedMainStackParamList, 'Splash'>;

interface SplashScreenProps {
    navigation: SplashNavigationProp;
    route: SplashRouteProp;
}

const Splash: FC<SplashScreenProps> = ({ navigation }) => {
    useEffect(() => {
        setTimeout(async () => {
            navigation.navigate('SignIn');
        }, 2000);
    }, [navigation]);

    return (
        <Layout>
            <View style={styles.container}>
                <Icon name="Logo" />
            </View>
        </Layout>
    );
};

export default Splash;
