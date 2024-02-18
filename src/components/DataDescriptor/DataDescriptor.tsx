import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../constants/colors';
import {
    CurrencyCode,
    CurrencySymbol,
    PrimaryColorTypes,
    OpacityValuesTypes,
} from '../../constants/types';
import Text from '../Text/Text';
import { ConvertToPrefixedAmount } from '../../utils/functions/convertToPrefix';

export type PeriodTypes = 'D' | 'W' | 'M' | '3M' | '6M';
type DataDescriptorTypes = {
    label: string;
    value: number;
    color: PrimaryColorTypes;
    sign?: 'redSign' | 'greenSign';
    textOpacity?: OpacityValuesTypes;
    currency?: CurrencyCode;
};

const DataDescriptor: FC<DataDescriptorTypes> = ({
    label,
    value,
    color,
    sign,
    currency = 'INR',
    textOpacity = '0.70',
}) => {
    const dynamicStyles = StyleSheet.create({
        eclipse: {
            width: 12,
            height: 12,
            borderRadius: 12,
            backgroundColor: colors[color],
            alignItems: 'center',
            justifyContent: 'center',
            top: 5,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={dynamicStyles.eclipse} />
                <Text
                    margins={{ left: 'marginSmall' }}
                    fontVariant="medium"
                    opacity={textOpacity}>
                    {label}
                </Text>
            </View>
            <Text
                color={
                    sign === 'greenSign'
                        ? 'greennotification'
                        : sign === 'redSign'
                        ? 'red'
                        : undefined
                }
                fontVariant="medium">
                {ConvertToPrefixedAmount(value, CurrencySymbol[currency])}
            </Text>
        </View>
    );
};
export default DataDescriptor;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between',
    },
    row: { flexDirection: 'row' },
});
