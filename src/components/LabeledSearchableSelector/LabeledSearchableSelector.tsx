import React, {
    Dispatch,
    FC,
    Fragment,
    SetStateAction,
    useEffect,
    useState,
} from 'react';
import {
    Keyboard,
    Modal as RNModal,
    ScrollView,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import styles from './LabeledSearchableSelector.styles';
import Text from 'components/Text/Text';
import { DropdownObject } from 'constants/types';
import Icon from 'components/Icon/Icon';
import LinearGradient from 'react-native-linear-gradient';
import colors from 'constants/colors';

type LabeledSearchableSelectorProps = {
    label: string;
    searchableTitle?: string;
    options: DropdownObject[];
    selectedItem: DropdownObject;
    onPressItem?: (item: DropdownObject) => void;
    setSelectedItem: Dispatch<SetStateAction<DropdownObject>>;
    placeHolder?: string;
    disabled?: boolean;
};

const LabeledSearchableSelector: FC<LabeledSearchableSelectorProps> = ({
    label,
    searchableTitle,
    options,
    selectedItem,
    onPressItem,
    setSelectedItem,
    placeHolder,
    disabled,
}) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isSearchableSelectionVisible, setIsSearchableSelectionVisible] =
        useState<boolean>(false);
    const [itemTemporary, setItemTemporary] = useState<DropdownObject>();

    const handleOnPressItem = (item: DropdownObject) => {
        Keyboard.dismiss();
        setSearchQuery(item.label);
        setItemTemporary(item);
        if (onPressItem) {
            onPressItem(item);
        }
        setSelectedItem(item);
    };

    useEffect(() => {
        return () => {
            setSearchQuery('');
        };
    }, []);

    return (
        <Fragment>
            <View style={styles.containerstyles}>
                <Text fontVariant="medium">{label}</Text>
                <TouchableOpacity
                    style={styles.textbox}
                    onPress={() => {
                        setIsSearchableSelectionVisible(true);
                    }}
                    disabled={disabled}>
                    <Text opacity={selectedItem.label ? undefined : '0.60'}>
                        {selectedItem.label || placeHolder}
                    </Text>
                    <Icon name="arrow_down" />
                </TouchableOpacity>
            </View>

            <RNModal
                visible={isSearchableSelectionVisible}
                animationType="slide"
                transparent>
                <View style={styles.modalOverlay} />
                <ScrollView contentContainerStyle={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.sliderlikebox} />
                        <Text
                            style={styles.selectedtextstyles}
                            fontVariant="medium"
                            size="body1">
                            {searchableTitle}
                        </Text>
                        <View style={styles.searchabletextinputcontainer}>
                            <TextInput
                                style={styles.searchabletextinput}
                                onChangeText={text => setSearchQuery(text)}
                                defaultValue={searchQuery}
                                autoCapitalize="none"
                            />
                            {searchQuery.length > 1 &&
                                (searchQuery === itemTemporary?.label ? (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setIsSearchableSelectionVisible(
                                                false,
                                            );
                                            setSelectedItem(itemTemporary);
                                        }}>
                                        <LinearGradient
                                            colors={[
                                                colors.lineargradientbutton1,
                                                colors.lineargradientbutton2,
                                            ]}
                                            style={
                                                styles.selctionlineargradientstyles
                                            }>
                                            <Icon name="arrow_right" />
                                        </LinearGradient>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setSearchQuery('');
                                        }}
                                        style={styles.closebuttonstyles}>
                                        <Icon
                                            name="close_icon"
                                            opacity={0.65}
                                        />
                                    </TouchableOpacity>
                                ))}
                        </View>
                        {options
                            .filter(item =>
                                item?.label
                                    ?.toLowerCase()
                                    .includes(searchQuery?.toLowerCase()),
                            )
                            .map(item => {
                                const textContent =
                                    typeof item.label === 'string'
                                        ? item.label
                                        : '';

                                const regex = new RegExp(
                                    `(${searchQuery})`,
                                    'gi',
                                );

                                // if (
                                //     searchQuery === '' ||
                                //     options.filter(item =>
                                //         item?.label
                                //             ?.toLowerCase()
                                //             .includes(
                                //                 searchQuery?.toLowerCase(),
                                //             ),
                                //     ).length < 2
                                // ) {
                                //     return ;
                                // }
                                return (
                                    <Fragment key={item.key}>
                                        <TouchableOpacity
                                            key={item.key}
                                            style={styles.itemcontainer}
                                            onPress={() => {
                                                handleOnPressItem(item);
                                            }}>
                                            {textContent
                                                .split(regex)
                                                .map((part, index) =>
                                                    regex.test(part) ? (
                                                        <Text
                                                            key={index}
                                                            color={'black'}
                                                            fontVariant={
                                                                'medium'
                                                            }
                                                            style={
                                                                styles.itemtextstyles
                                                            }>
                                                            {part}
                                                        </Text>
                                                    ) : (
                                                        <Text
                                                            key={index}
                                                            color={'black'}
                                                            fontVariant={
                                                                'regular'
                                                            }
                                                            style={
                                                                styles.itemtextstyles
                                                            }>
                                                            {part}
                                                        </Text>
                                                    ),
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

export default LabeledSearchableSelector;
