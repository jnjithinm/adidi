import colors from 'constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textinputstyles: {
        backgroundColor: colors.lightgrey,
        top: 10,
        width: '100%',
        borderRadius: 20,
        height: 40,
        paddingLeft: 20,
    },
    timerStyle: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 20,
    },
    containerForTimerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    messageStyles: {
        top: 10,
    },
});
export default styles;
