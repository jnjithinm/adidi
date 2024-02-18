import React, { FC, useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

import { PrimaryColorTypes, OpacityValuesTypes } from '../../constants/types';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import Text from '../Text/Text';
import Card from '../Card/Card';

export type PeriodTypes = 'D' | 'W' | 'M' | '3M' | '6M';

type IndicatorBarTypes = {
    value: number;
    maxValue: number;
    backgroundColor: PrimaryColorTypes;
    showValue?: boolean;
    horizontalLineOpacity?: OpacityValuesTypes;
};

const IndicatorBar: FC<IndicatorBarTypes> = ({
    value,
    maxValue,
    backgroundColor,
    showValue,
    horizontalLineOpacity,
}) => {
    const widthInPercentage = (value / maxValue) * 100;
    const widthInPercentageExcludeZero =
        widthInPercentage < 15 ? 15 : widthInPercentage;
    const animatedWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedWidth, {
            toValue: widthInPercentageExcludeZero,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const animatedStyle = {
        width: animatedWidth.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
        }),
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[animatedStyle]}>
                <Card
                    width="100%"
                    backgroundColor={backgroundColor}
                    height="heightSmall"
                    alignItems="center"
                    justifyContent="center">
                    {showValue && (
                        <Text
                            color={
                                backgroundColor === 'primarydark'
                                    ? 'white'
                                    : 'black'
                            }
                            fontVariant="medium">
                            ₹ {value}
                        </Text>
                    )}
                </Card>
            </Animated.View>
            <HorizontalLine
                width={`${100 - widthInPercentageExcludeZero}%`}
                opacity={horizontalLineOpacity}
            />
        </View>
    );
};

export default IndicatorBar;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
    },
});
