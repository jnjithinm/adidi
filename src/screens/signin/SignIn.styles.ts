import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logocontainer: {
        alignSelf: 'center',
        marginTop: '10%',
    },
    logonamecontainer: {
        alignSelf: 'center',
    },
    buttonscontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',
        bottom: 5,
        width: '45%',
        position: 'absolute',
    },
    otpcontainer: {
        alignSelf: 'center',
        marginVertical: '10%',
    },
    otpinputcontainer: {
        marginVertical: 30,
        marginHorizontal: 20,
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 1,
        width: '90%',
    },
    marginttopto20: {
        marginTop: '35%',
    },
    resendOTP: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        bottom: 25,
        position: 'absolute',
    },
    rendrPolicyContainer: {
        flexDirection: 'row',
        marginTop: '5%',
        justifyContent: 'center',
    },
});

export default styles;
