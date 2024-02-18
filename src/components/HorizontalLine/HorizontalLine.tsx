import React, { FC } from 'react';
import { DimensionValue, StyleSheet, View } from 'react-native';
import colors from '../../constants/colors';
import { OPACITY } from '../../constants/themes';
import { OpacityValuesTypes } from '../../constants/types';

type HorizontalLineTypes = {
    width?: DimensionValue;
    marginVertical?: DimensionValue;
    opacity?: OpacityValuesTypes;
};

const HorizontalLine: FC<HorizontalLineTypes> = ({
    width = '100%',
    marginVertical,
    opacity = '0.1',
}) => {
    let finalOpacity = OPACITY[opacity];
    return (
        <View
            style={{
                ...styles.line,
                width,
                marginVertical,
                opacity: finalOpacity,
            }}
        />
    );
};
export default HorizontalLine;

const styles = StyleSheet.create({
    line: {
        height: 1,
        alignSelf: 'center',
        backgroundColor: colors.black,
    },
});
