import React, { FC, useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, TextStyle } from 'react-native';

import Text from '../../components/Text/Text';
import Layout from 'components/Layout/Layout';
import { StackNavigationProp } from '@react-navigation/stack';
import { ModifiedMainStackParamList } from 'navigation/MainStack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import LabeledTextInput from 'components/LabeledTextInput/LabeledTextInput';
import styles from './OTP.styles';

import { RenderLogo, RenderPolicy } from 'screens/signin/SignIn';

type OTPNavigationProp = StackNavigationProp<ModifiedMainStackParamList, 'OTP'>;
type OTPRouteProp = RouteProp<ModifiedMainStackParamList, 'OTP'>;

interface OTPScreenProps {
    navigation: OTPNavigationProp;
    route: OTPRouteProp;
}

const OTP: FC<OTPScreenProps> = ({ navigation }) => {
    // const {AuthenticationMethod,value}=route.params;
    const [enteredOTP, setEnteredOTP] = useState<string>('');
    const [isShowError, setIsShowError] = useState<boolean>(false);
    const [remainingTime, setRemainingTime] = useState<number>(180);

    const onPressResendOTP = () => {
        //api call again
        setRemainingTime(180);
    };

    function formatTime(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds =
            remainingSeconds < 10
                ? `0${remainingSeconds}`
                : `${remainingSeconds}`;

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    const decrementTime = useCallback(() => {
        setRemainingTime(prevRemainingTime =>
            prevRemainingTime > 0 ? prevRemainingTime - 1 : 0,
        );
    }, []);

    useEffect(() => {
        const intervalId = setInterval(decrementTime, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [decrementTime]);

    useEffect(() => {
        decrementTime();
    }, [decrementTime]);

    const onPressVerify = () => {
        setIsShowError(true);
        if (enteredOTP.length > 5) {
            //API call
            //if success,
            navigation.navigate('Registration');
        }
    };

    const textInputStyle: TextStyle = {
        letterSpacing: 10,
    };
    return (
        <Layout>
            <RenderLogo />
            <View style={styles.otpcontainer}>
                <Icon name="RectangelIcon" />
                <View style={styles.otpinputcontainer}>
                    <LabeledTextInput
                        value={enteredOTP}
                        setValue={setEnteredOTP}
                        label="Please enter the OTP"
                        placeholder={'******'}
                        keyboardType="number-pad"
                        maxLength={6}
                        timer={formatTime(remainingTime)}
                        textInputStyles={textInputStyle}
                        message={{
                            text: 'You will receive a 6 digit code for verification',
                            type: 'normal',
                        }}
                        isShowError={isShowError}
                        onPressFunction={() => setIsShowError(false)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.resendOTP}
                    onPress={onPressResendOTP}
                    disabled={remainingTime !== 0}>
                    <Text color="primarydark" fontVariant="semiBold">
                        Resend OTP
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.marginttopto20}>
                <Button
                    buttonType="Nav Button"
                    buttonText={'Verify'}
                    disabled={enteredOTP.length < 6}
                    onPress={onPressVerify}
                />
            </View>
            <RenderPolicy />
        </Layout>
    );
};

export default OTP;
