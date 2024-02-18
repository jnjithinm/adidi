import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    lineargradientstyles: {
        flex: 1,
        borderRadius: 25,
        elevation: 20,
        shadowColor: colors.lineargradientbutton1,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 20,
        backgroundColor: colors.transparent,
        // paddingVertical: 15,
        height: 50,
        shadowRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableopacityButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    iconstyles: {
        backgroundColor: colors.iconbuttondisabled,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
    },
    icondisabledstyles: {
        backgroundColor: colors.primarydark,
    },
});

export default styles;
