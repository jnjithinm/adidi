import React, { Dispatch, FC, Fragment, SetStateAction, useState } from 'react';
import {
    Modal as RNModal,
    ScrollView,
    TouchableOpacity,
    View,
} from 'react-native';

import styles from './LabeledItemSelector.styles';
import Text from '../Text/Text';
import { DropdownObject } from '../../constants/types';
import Icon from '../Icon/Icon';
import colors from '../../constants/colors';

type LabeledItemSelectorProps = {
    label: string;
    selectionTitle?: string;
    options: DropdownObject[];
    selectedItem: DropdownObject;
    onPressItem?: (item: DropdownObject) => void;
    setSelectedItem: Dispatch<SetStateAction<DropdownObject>>;
    placeHolder?: string;
    disabled?: boolean;
};

const LabeledItemSelector: FC<LabeledItemSelectorProps> = ({
    label,
    selectionTitle,
    options,
    selectedItem,
    onPressItem,
    setSelectedItem,
    placeHolder,
    disabled,
}) => {
    const [isItemSelectionVisible, setIsItemSelectionVisible] =
        useState<boolean>(false);

    const handleOnPressItem = (item: DropdownObject) => {
        if (onPressItem) {
            onPressItem(item);
        }
        setSelectedItem(item);
        setIsItemSelectionVisible(false);
    };

    return (
        <Fragment>
            <View style={styles.containerstyles}>
                <Text fontVariant="medium">{label}</Text>
                <TouchableOpacity
                    style={styles.textbox}
                    onPress={() => {
                        setIsItemSelectionVisible(true);
                    }}
                    disabled={disabled}>
                    <Text opacity={selectedItem.label ? undefined : '0.60'}>
                        {selectedItem.label || placeHolder}
                    </Text>
                    <Icon name="arrow_down" />
                </TouchableOpacity>
            </View>

            <RNModal
                visible={isItemSelectionVisible}
                animationType="slide"
                transparent>
                <View style={styles.modalOverlay} />
                <ScrollView contentContainerStyle={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.sliderlikebox} />
                        <Text
                            style={styles.selectedtextstyles}
                            fontVariant="medium"
                            size="body2">
                            {selectionTitle}
                        </Text>
                        {options.map((item, index) => {
                            return (
                                <Fragment key={item.key}>
                                    <TouchableOpacity
                                        key={item.key}
                                        style={styles.itemcontainer}
                                        onPress={() => {
                                            handleOnPressItem(item);
                                        }}>
                                        <Text
                                            key={index}
                                            color={'black'}
                                            fontVariant={
                                                item === selectedItem
                                                    ? 'medium'
                                                    : 'regular'
                                            }
                                            style={styles.itemtextstyles}>
                                            {item.label}
                                        </Text>
                                        {item === selectedItem && (
                                            <Icon
                                                name="TickIcon"
                                                fill={colors.primarydark}
                                                stroke={colors.primarydark}
                                            />
                                        )}
                                    </TouchableOpacity>
                                    <View style={styles.horizontalline} />
                                </Fragment>
                            );
                        })}
                    </View>
                </ScrollView>
            </RNModal>
        </Fragment>
    );
};

export default LabeledItemSelector;
