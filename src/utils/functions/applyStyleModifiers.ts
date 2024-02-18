import { TextStyle, ViewStyle, StyleProp } from 'react-native';

import colors, { ColorTypes } from '../../constants/colors';
import {
    BORDER_RADIUS_SIZES,
    FONT_SIZES,
    FONT_STYLES,
    FONT_VARIANT,
    HEIGHT_SIZES,
    MARGIN_SIZES,
    MarginTypes,
    PADDING_SIZES,
    PaddingTypes,
} from '../../constants/themes';
import {
    BorderRadiusValuesTypes,
    FontSizeValuesTypes,
    FontStyleValuesTypes,
    FontVariantValuesTypes,
    HeightValuesTypes,
    MarginsValuesTypes,
    OpacityValuesTypes,
    PaddingsValuesTypes,
} from '../../constants/types';

interface CommonStyleModifiers {
    fontVariant?: FontVariantValuesTypes;
    color?: ColorTypes;
    opacity?: OpacityValuesTypes;
    size?: FontSizeValuesTypes;
    fontStyle?: FontStyleValuesTypes;
    margins?: MarginsValuesTypes;
    paddings?: PaddingsValuesTypes;
    backgroundColor?: ColorTypes;
    height?: HeightValuesTypes;
    borderRadius?: BorderRadiusValuesTypes;
    borderColor?: ColorTypes;
}

function applyStyleModifiers<T extends TextStyle | ViewStyle>(
    baseStyle: StyleProp<T>,
    modifiers: CommonStyleModifiers,
): StyleProp<T> | undefined {
    let style: StyleProp<T>;

    if (Array.isArray(baseStyle)) {
        style = [...baseStyle];
    } else {
        style = { ...(baseStyle as T) };
    }

    if (modifiers.fontStyle) {
        style = {
            ...(style as T),
            ...FONT_STYLES[modifiers.fontStyle],
        };
    }

    if (modifiers.backgroundColor) {
        (style as T).backgroundColor = colors[modifiers.backgroundColor];
    }
    if (modifiers.borderColor) {
        (style as T).borderColor = colors[modifiers.borderColor];
    }

    if (modifiers.borderRadius) {
        (style as T).borderRadius = BORDER_RADIUS_SIZES[modifiers.borderRadius];
    }

    if (modifiers.height) {
        (style as T).height = HEIGHT_SIZES[modifiers.height];
    }
    if (modifiers.fontVariant) {
        (style as TextStyle).fontFamily = FONT_VARIANT[modifiers.fontVariant];
    }

    if (modifiers.color) {
        (style as TextStyle).color = colors[modifiers.color];
    }

    if (modifiers.size) {
        (style as TextStyle).fontSize = FONT_SIZES[modifiers.size];
    }
    if (modifiers.margins) {
        for (const marginProp in modifiers.margins) {
            if (modifiers.margins[marginProp]) {
                const marginKey = modifiers.margins[
                    marginProp
                ] as keyof MarginTypes;
                const marginValue = MARGIN_SIZES[marginKey];
                if (marginValue !== undefined) {
                    (style as T)[marginProp] = marginValue;
                }
            }
        }
    }
    if (modifiers.paddings) {
        for (const paddingProp in modifiers.paddings) {
            if (modifiers.paddings[paddingProp]) {
                const paddingKey = modifiers.paddings[
                    paddingProp
                ] as keyof PaddingTypes;
                const paddingValue = PADDING_SIZES[paddingKey];
                if (paddingKey !== undefined) {
                    (style as T)[paddingProp] = paddingValue;
                }
            }
        }
    }
    return style;
}

export default applyStyleModifiers;
