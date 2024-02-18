import React, { FC, useState } from 'react';
import { View } from 'react-native';

import Text from '../../components/Text/Text';
import Layout from 'components/Layout/Layout';
import { StackNavigationProp } from '@react-navigation/stack';
import {
    AuthenticationMethod,
    ModifiedMainStackParamList,
} from 'navigation/MainStack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import LabeledTextInput from 'components/LabeledTextInput/LabeledTextInput';
import styles from './SignIn.styles';
import useValidation from '../../hooks/useValidation';

type SignInNavigationProp = StackNavigationProp<
    ModifiedMainStackParamList,
    'SignIn'
>;
type SignInRouteProp = RouteProp<ModifiedMainStackParamList, 'SignIn'>;

export const RenderLogo: FC = () => (
    <View style={styles.logocontainer}>
        <Icon name="Logo" />
        <View style={styles.logonamecontainer}>
            <Text
                size="body5"
                margins={{ bottom: 'margin10px' }}
                fontVariant="semiBold"
                opacity="0.60">
                ADIDI
            </Text>
        </View>
    </View>
);

export const RenderPolicy: FC = () => (
    <View style={styles.rendrPolicyContainer}>
        <Text
            size="verySmall2"
            opacity="0.30"
            margins={{ right: 'marginSmall' }}>
            Privacy policy
        </Text>
        <Text size="verySmall2" opacity="0.30">
            |
        </Text>
        <Text
            size="verySmall2"
            opacity="0.30"
            margins={{ left: 'marginSmall' }}>
            Terms of service
        </Text>
    </View>
);

interface SignInScreenProps {
    navigation: SignInNavigationProp;
    route: SignInRouteProp;
}

const SignIn: FC<SignInScreenProps> = ({ navigation }) => {
    const [selectedAuthenticationMethod, setSelectedAuthenticationMethod] =
        useState<AuthenticationMethod>('Mobile Number');

    const [mobileNumber, setMobileNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isShowError, setIsShowError] = useState<boolean>(false);

    const { validateField } = useValidation();

    const mobileNumberErrorMessage = validateField({
        fieldName: 'Mobile Number',
        value: mobileNumber,
    });

    const emailErrorMessage = validateField({
        fieldName: 'Email ID',
        value: email,
    });

    const onPressSendOTP = () => {
        setIsShowError(true);
        if (!mobileNumberErrorMessage) {
            //API call
            //if success,
            navigation.navigate('OTP', {
                authenticationMethod: selectedAuthenticationMethod,
                value:
                    selectedAuthenticationMethod === 'Mobile Number'
                        ? mobileNumber
                        : email,
            });
        }
    };

    return (
        <Layout>
            <RenderLogo />
            <View style={styles.otpcontainer}>
                <Icon name="RectangelIcon" />
                <View style={styles.otpinputcontainer}>
                    <LabeledTextInput
                        value={
                            selectedAuthenticationMethod === 'Mobile Number'
                                ? mobileNumber
                                : email
                        }
                        setValue={
                            selectedAuthenticationMethod === 'Mobile Number'
                                ? setMobileNumber
                                : setEmail
                        }
                        label={
                            selectedAuthenticationMethod === 'Mobile Number'
                                ? 'Enter Your Mobile Number'
                                : 'Enter your Email ID'
                        }
                        placeholder={
                            selectedAuthenticationMethod === 'Mobile Number'
                                ? 'Eg: 7907200321'
                                : 'Eg: john123@example.com'
                        }
                        keyboardType={
                            selectedAuthenticationMethod === 'Mobile Number'
                                ? 'number-pad'
                                : 'email-address'
                        }
                        autoCapitalize={
                            selectedAuthenticationMethod === 'Mobile Number'
                                ? undefined
                                : 'none'
                        }
                        maxLength={
                            selectedAuthenticationMethod === 'Mobile Number'
                                ? 10
                                : 255
                        }
                        message={{
                            text:
                                selectedAuthenticationMethod === 'Mobile Number'
                                    ? mobileNumberErrorMessage
                                    : emailErrorMessage,
                            type: 'warning',
                        }}
                        isShowError={isShowError}
                        onPressFunction={() => setIsShowError(false)}
                    />
                </View>

                <View style={styles.buttonscontainer}>
                    <Button
                        buttonType="Icon Button"
                        iconName="Phone"
                        onPress={() => {
                            setSelectedAuthenticationMethod('Mobile Number');
                            setEmail('');
                        }}
                        disabled={
                            selectedAuthenticationMethod === 'Mobile Number'
                        }
                    />
                    <Button
                        buttonType="Icon Button"
                        iconName="Email"
                        onPress={() => {
                            setSelectedAuthenticationMethod('Email');
                            setMobileNumber('');
                        }}
                        disabled={selectedAuthenticationMethod === 'Email'}
                    />
                </View>
            </View>
            <View style={styles.marginttopto20}>
                <Button
                    buttonType="Nav Button"
                    buttonText={'Send OTP'}
                    disabled={
                        (selectedAuthenticationMethod === 'Mobile Number' &&
                            mobileNumber.length < 10) ||
                        (selectedAuthenticationMethod === 'Email' &&
                            (!email.includes('@') || !email.includes('.')))
                    }
                    onPress={onPressSendOTP}
                />
            </View>
            <RenderPolicy />
        </Layout>
    );
};

export default SignIn;
