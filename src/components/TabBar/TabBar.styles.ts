import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    TabBarContainer: {
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
    IconsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        height: '100%',
    },
    linearGradient: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 21,
    },
    centreIconStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        bottom: '5%',
    },
    OtherIconStyles: {
        justifyContent: 'center',
    },
});
