import React, { FC } from 'react';
import {
    ViewStyle,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
    FlexTypes,
    MarginsValuesTypes,
    PaddingsValuesTypes,
} from '../../constants/types';
import applyStyleModifiers from '../../utils/functions/applyStyleModifiers';
import colors from '../../constants/colors';
import Text from '../Text/Text';
import styles from './Button.style';
import Icon, { IconsTypes } from '../Icon/Icon';

type ButtonVariants = 'Nav Button' | 'Link Button' | 'Icon Button';

type TouchableOpacityPropsWithoutStyle = Omit<TouchableOpacityProps, 'style'>;

export interface ButtonTypes
    extends FlexTypes,
        TouchableOpacityPropsWithoutStyle {
    margins?: MarginsValuesTypes;
    paddings?: PaddingsValuesTypes;
    buttonType?: ButtonVariants;
    buttonText?: string;
    disabled?: boolean;
    iconName?: IconsTypes;
    style?: ViewStyle;
}

const Button: FC<ButtonTypes> = ({
    flex,
    flexDirection,
    alignItems,
    justifyContent,
    buttonType,
    buttonText,
    iconName,
    disabled,
    style,
    ...rest
}) => {
    let ButtonDynamicStyles: ViewStyle = applyStyleModifiers(
        {},
        rest,
    ) as ViewStyle;

    const switchStyles = (buttonType: ButtonVariants | undefined) => {
        switch (buttonType) {
            case 'Nav Button':
            default:
                let NavButtonStyles: ViewStyle = {
                    borderRadius: 30,
                    flex,
                    flexDirection,
                    alignItems,
                    justifyContent,
                };
                let disabledStyle = [
                    colors.lineargradientbuttondisabled,
                    colors.lineargradientbuttondisabled,
                ];
                let activeStyle = [
                    colors.lineargradientbutton1,
                    colors.lineargradientbutton2,
                ];

                return (
                    <LinearGradient
                        colors={disabled ? disabledStyle : activeStyle}
                        style={{
                            ...styles.lineargradientstyles,
                            ...NavButtonStyles,
                            ...ButtonDynamicStyles,
                            ...style,
                        }}>
                        <TouchableOpacity
                            style={{
                                ...styles.touchableopacityButton,
                                ...ButtonDynamicStyles,
                            }}
                            {...rest}
                            disabled={disabled}>
                            <Text fontStyle="buttonFont">
                                {buttonText || 'Submit'}
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                );

            case 'Icon Button':
                return (
                    <TouchableOpacity
                        style={[
                            disabled
                                ? {
                                      ...styles.iconstyles,
                                      ...styles.icondisabledstyles,
                                      ...style,
                                  }
                                : { ...styles.iconstyles, ...style },
                        ]}
                        disabled={disabled}
                        {...rest}>
                        <Icon
                            name={iconName || 'PlusIcon'}
                            color={disabled ? colors.primarydark : colors.white}
                        />
                    </TouchableOpacity>
                );
        }
    };

    return switchStyles(buttonType);
};

export default Button;
