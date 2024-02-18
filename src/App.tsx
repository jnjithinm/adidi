import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './navigation/MainStack';
import { StyleSheet, View } from 'react-native';
import colors from './constants/colors';

const App = () => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <MainStack />
            </View>
        </SafeAreaProvider>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
});
