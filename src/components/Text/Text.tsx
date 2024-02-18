import React, { FC, ReactNode } from 'react';
import {
    Text as ReactNativeText,
    TextProps,
    TextStyle,
    StyleSheet,
} from 'react-native';

import { ColorTypes } from '../../constants/colors';
import { FONT_STYLES, OPACITY } from '../../constants/themes';
import {
    FontSizeValuesTypes,
    FontStyleValuesTypes,
    FontVariantValuesTypes,
    MarginsValuesTypes,
    OpacityValuesTypes,
} from '../../constants/types';
import applyStyleModifiers from '../../utils/functions/applyStyleModifiers';

export interface TextTypes extends TextProps {
    children?: ReactNode;
    color?: ColorTypes;
    size?: FontSizeValuesTypes;
    opacity?: OpacityValuesTypes;
    fontVariant?: FontVariantValuesTypes;
    fontStyle?: FontStyleValuesTypes;
    margins?: MarginsValuesTypes;
    style?: TextStyle;
}

const Text: FC<TextTypes> = ({ children, opacity, style, ...rest }) => {
    let selectedTextStyle: TextStyle = StyleSheet.flatten(
        applyStyleModifiers(FONT_STYLES.normal, rest),
    );
    if (opacity) {
        selectedTextStyle.opacity = OPACITY[opacity];
    }

    return (
        <ReactNativeText
            style={{
                ...selectedTextStyle,
                ...style,
            }}
            {...rest}>
            {children}
        </ReactNativeText>
    );
};

export default Text;
