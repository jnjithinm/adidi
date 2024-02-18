import colors from 'constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flexDirectionToRow: {
        flexDirection: 'row',
    },
    PeriodButtonScrollContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    marginVerticalTo25: {
        marginVertical: 25,
    },
    TickIconContainer: {
        backgroundColor: colors.primarydark,
        padding: 5,
        borderRadius: 20,
    },
    marginTopTo15: {
        marginTop: 15,
    },
    TickIconCompleteProfileCombiner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    marginVerticalTo5: {
        marginVertical: 5,
    },
    marginTopTo10: {
        marginTop: 10,
    },
});

export default styles;
