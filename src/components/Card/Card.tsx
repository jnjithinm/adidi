import React, { FC, ReactNode } from 'react';
import { DimensionValue, View, ViewStyle } from 'react-native';

import {
    BorderRadiusValuesTypes,
    FlexTypes,
    HeightValuesTypes,
    MarginsValuesTypes,
    PaddingsValuesTypes,
} from '../../constants/types';
import applyStyleModifiers from '../../utils/functions/applyStyleModifiers';
import { ColorTypes } from '../../constants/colors';

export interface CardTypes extends FlexTypes {
    children?: ReactNode;
    backgroundColor?:
        | 'primary'
        | 'primarydark'
        | 'primarylight'
        | 'white'
        | 'lightgrey';
    borderRadius?: BorderRadiusValuesTypes;
    margins?: MarginsValuesTypes;
    paddings?: PaddingsValuesTypes;
    height?: HeightValuesTypes;
    width?: DimensionValue;
    borderColor?: ColorTypes;
}

const Card: FC<CardTypes> = ({ children, width, ...rest }) => {
    let cardDefaultStyles: ViewStyle = {
        borderRadius: 20,
        height: 'auto',
        width: width,
        borderWidth: rest.borderColor ? 1 : undefined,
        flex: rest.flex,
        flexDirection: rest.flexDirection,
        alignItems: rest.alignItems,
        justifyContent: rest.justifyContent,
    };

    let CardStyles: ViewStyle = applyStyleModifiers(
        cardDefaultStyles,
        rest,
    ) as ViewStyle;

    return (
        <View
            style={{
                ...CardStyles,
            }}>
            {children}
        </View>
    );
};

export default Card;
