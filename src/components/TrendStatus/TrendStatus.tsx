import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../components/Text/Text';
import Icon from '../../components/Icon/Icon';
import { FontVariantValuesTypes } from '../../constants/types';

type TrendStatusTypes = {
    percentage: number;
    fontVariant?: FontVariantValuesTypes;
    message: 'New customers today' | 'Sales Boom' | 'Sales loss' | string;
    variationType: 'rise' | 'loss';
};

const TrendStatus: FC<TrendStatusTypes> = ({
    percentage,
    message,
    fontVariant,
    variationType,
}) => {
    return (
        <View style={styles.conatiner}>
            {variationType === 'loss' ? (
                <Icon name="ArrowFallIcon" />
            ) : (
                <Icon name="ArrowRiseIcon" />
            )}
            <Text
                fontVariant="semiBold"
                size="body3"
                margins={{ marginHorizontal: 'marginSmall' }}>
                {percentage}
            </Text>
            {message !== 'New customers today' && (
                <Text
                    size="body2"
                    fontVariant={fontVariant || 'semiBold'}
                    margins={{ right: 'marginSmall' }}>
                    %
                </Text>
            )}
            <Text
                size="body2"
                fontVariant={fontVariant || 'semiBold'}
                margins={{ left: 'marginSmall' }}>
                {message}
            </Text>
        </View>
    );
};
export default TrendStatus;

const styles = StyleSheet.create({
    conatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
