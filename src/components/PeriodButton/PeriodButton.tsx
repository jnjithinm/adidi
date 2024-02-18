import React, { Dispatch, FC, SetStateAction } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Text from '../Text/Text';
import Card from '../Card/Card';

export type PeriodTypes = 'D' | 'W' | 'M' | '3M' | '6M';
type PeriodButtonTypes = {
    period: PeriodTypes;
    selected?: boolean;
    setSelectedPeriod: Dispatch<SetStateAction<PeriodTypes>>;
    onPress?: () => void;
};

const PeriodButton: FC<PeriodButtonTypes> = ({
    period,
    selected,
    onPress,
    setSelectedPeriod,
}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                setSelectedPeriod(period);
                if (onPress) {
                    onPress();
                }
            }}
            style={styles.container}>
            <Card
                width={68}
                backgroundColor={selected ? 'primarydark' : 'lightgrey'}
                height="heightMedium"
                alignItems="center"
                justifyContent="center">
                <Text
                    color={selected ? 'white' : 'black'}
                    fontVariant={selected ? 'semiBold' : undefined}>
                    {period}
                </Text>
            </Card>
        </TouchableOpacity>
    );
};
export default PeriodButton;

const styles = StyleSheet.create({
    container: { flex: 1, marginHorizontal: 4 },
});
