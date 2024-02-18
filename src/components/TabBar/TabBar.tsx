import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../constants/colors';
import styles from './TabBar.styles';
import Icon from '../Icon/Icon';

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
    const onTabPress = (routeName: string, _routeIndex: number) => {
        navigation.navigate(routeName);
    };

    return (
        <View style={styles.TabBarContainer}>
            <Icon name="TabIcon" />
            <View style={styles.IconsContainer}>
                {state.routes.map((route, index) => {
                    const focused = index === state.index ? true : false;
                    type IconType = {
                        [key: string]: JSX.Element;
                    };

                    const Icons: IconType = {
                        Home: (
                            <Icon
                                name="HomeIcon"
                                stroke={colors.black}
                                opacity={focused ? 1 : 0.5}
                            />
                        ),
                        CreateInvoice: (
                            <LinearGradient
                                colors={['#005D56', '#003737']}
                                style={styles.linearGradient}>
                                <Icon name="PlusIcon" />
                            </LinearGradient>
                        ),
                        Profile: (
                            <Icon
                                name="FavIcon"
                                stroke={colors.black}
                                opacity={focused ? 1 : 0.5}
                            />
                        ),
                    };
                    return (
                        <TouchableOpacity
                            style={
                                index === 1
                                    ? styles.centreIconStyle
                                    : styles.OtherIconStyles
                            }
                            key={index}
                            onPress={() => onTabPress(route.name, index)}>
                            {Icons[route.name]}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

export default TabBar;
