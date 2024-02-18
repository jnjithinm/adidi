import React, { Dispatch, FC, SetStateAction } from 'react';
import {
    Keyboard,
    TextInput,
    TextInputProps,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';

import Text from 'components/Text/Text';
import styles from './LabeledTextInput.style';
import { ColorTypes } from 'constants/colors';

export interface LabeledTextInputTypes extends TextInputProps {
    label: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    placeHolder?: string;
    onPressFunction?: (text: string) => void;
    textInputStyles?: ViewStyle & TextStyle;
    ContainerStyles?: ViewStyle;
    timer?: string | null;
    message?: { text: string; type?: 'warning' | 'normal' | 'success' };
    isShowError?: boolean;
}

const LabeledTextInput: FC<LabeledTextInputTypes> = ({
    label,
    value,
    placeHolder,
    setValue,
    onPressFunction,
    ContainerStyles,
    textInputStyles,
    timer,
    message,
    isShowError,
    ...rest
}) => {
    const onChangeText = (text: string) => {
        setValue(text);
        if (onPressFunction) {
            onPressFunction(text);
        }
        text?.length === rest.maxLength && Keyboard.dismiss();
    };

    const getMessageColor = (
        type: 'warning' | 'normal' | 'success',
    ): ColorTypes => {
        switch (type) {
            case 'warning':
                return 'red';
            case 'normal':
                return 'lightgrey';
            case 'success':
                return 'lightgrey';
            default:
                return 'black';
        }
    };

    return (
        <View
            style={{
                ...ContainerStyles,
            }}>
            <Text fontVariant="medium" size="body1">
                {label}
            </Text>
            <View style={styles.containerForTimerStyle}>
                <TextInput
                    style={{
                        ...styles.textinputstyles,
                        ...textInputStyles,
                    }}
                    placeholder={placeHolder}
                    value={value}
                    onChangeText={onChangeText}
                    {...rest}
                />
                <Text
                    color="primarydark"
                    size="small3"
                    style={styles.timerStyle}>
                    {timer}
                </Text>
            </View>
            {isShowError && message && (
                <Text
                    style={styles.messageStyles}
                    color={getMessageColor(message.type || 'normal')}
                    size="verySmall1">
                    {message.text}
                </Text>
            )}
        </View>
    );
};

export default LabeledTextInput;
