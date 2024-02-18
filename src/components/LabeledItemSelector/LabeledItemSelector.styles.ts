import colors from 'constants/colors';
import { FONT_SIZES, FONT_VARIANT } from 'constants/themes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.modaloutsidecolor,
    },
    modalContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: colors.white,
        // borderRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: 15,
    },
    header: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentContainer: {
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    buttonsContainer: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginTop: 20,
        right: 20,
    },
    sliderlikebox: {
        width: 45,
        height: 7,
        backgroundColor: colors.primarydark,
        borderRadius: 10,
        alignSelf: 'center',
    },
    containerstyles: {
        marginVertical: 10,
    },
    textbox: {
        height: 45,
        width: '100%',
        backgroundColor: colors.lightgrey,
        borderRadius: 20,
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 10,
        flexDirection: 'row',
    },
    searchabletextinputcontainer: {
        width: '100%',
        backgroundColor: colors.lightgrey,
        borderRadius: 20,
        marginVertical: 20,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    searchabletextinput: {
        width: '90%',
        fontFamily: FONT_VARIANT.regular,
        fontSize: FONT_SIZES.small3,
    },
    itemcontainer: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        paddingLeft: 10,
    },
    itemtextstyles: {
        letterSpacing: 0.65,
    },
    horizontalline: {
        width: '100%',
        height: 2,
        backgroundColor: colors.lightgrey,
    },
    selectedtextstyles: {
        alignSelf: 'flex-start',
        marginVertical: 20,
    },
    selctionlineargradientstyles: {
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    closebuttonstyles: {
        width: '100%',
    },
});

export default styles;
