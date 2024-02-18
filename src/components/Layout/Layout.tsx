import React, { ReactNode, FC } from 'react';
import { View, ScrollView, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import StatusBar from '../../components/StatusBar';
import colors, { ColorTypes } from '../../constants/colors';

interface LayoutProps {
    children: ReactNode;
    backgroundColor?: ColorTypes;
    overridePaddingHorizontal?: boolean;
    linearGradient?: boolean;
}

const Layout: FC<LayoutProps> = ({
    children,
    backgroundColor,
    overridePaddingHorizontal,
    linearGradient,
}) => {
    let backgroundStyle = backgroundColor
        ? colors[backgroundColor]
        : colors.white;

    const container: ViewStyle = {
        backgroundColor: backgroundStyle,
        paddingHorizontal: overridePaddingHorizontal ? 0 : '8%',
        paddingTop: '8%',
        minHeight: '100%',
        // flex:1
        // height:'100%'
        // paddingBottom: linearGradient && tabBar ? tabBarHeight :0 ,
    };
    const ViewContainer: ViewStyle = { flexGrow: 1 };
    const linearGradientStyle: ViewStyle = { paddingBottom: '25%' };

    return (
        <View style={ViewContainer}>
            <ScrollView
                contentContainerStyle={container}
                showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor={backgroundStyle} />
                {linearGradient ? (
                    <LinearGradient
                        colors={[
                            colors.white,
                            colors.primarylight1,
                            colors.primarylight2,
                            colors.white,
                        ]}
                        style={linearGradientStyle}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        locations={[0.05, 0.6, 0.75, 1.5]}>
                        {children}
                    </LinearGradient>
                ) : (
                    children
                )}
            </ScrollView>
        </View>
    );
};

export default Layout;
