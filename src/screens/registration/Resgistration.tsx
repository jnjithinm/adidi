import React, { FC, useState } from 'react';

import Layout from 'components/Layout/Layout';
import { StackNavigationProp } from '@react-navigation/stack';
import { ModifiedMainStackParamList } from 'navigation/MainStack';
import { RouteProp } from '@react-navigation/native';
import Card from 'components/Card/Card';
import LabeledTextInput from 'components/LabeledTextInput/LabeledTextInput';
import Text from 'components/Text/Text';
import LabeledDropdown from 'components/LabeledSearchableSelector/LabeledSearchableSelector';
import styles from './Registration.styles';
import { DropdownObject } from 'constants/types';
import LabeledItemSelector from 'components/LabeledItemSelector/LabeledItemSelector';
import Button from 'components/Button/Button';

type RegistrationNavigationProp = StackNavigationProp<
    ModifiedMainStackParamList,
    'Registration'
>;
type RegistrationRouteProp = RouteProp<
    ModifiedMainStackParamList,
    'Registration'
>;

interface RegistrationScreenProps {
    navigation: RegistrationNavigationProp;
    route: RegistrationRouteProp;
}
type RenderTitleTypes = {
    title: string;
};
const RenderTitle: FC<RenderTitleTypes> = ({ title }) => (
    <Text
        color="black"
        size="body4"
        fontVariant="semiBold"
        style={styles.titletextstyles}>
        {title}
    </Text>
);

const Registration: FC<RegistrationScreenProps> = ({}) => {
    const [displayName, setDisplayName] = useState<string>('');
    const [registeredName, setRegisteredName] = useState<string>('');
    const [selectedBuisinessCatagory, setSelectedBuisinessCatagory] =
        useState<DropdownObject>({ key: '', value: '', label: '' });
    const [selectedRegistrationType, setSelectedRegistrationType] =
        useState<DropdownObject>({ key: '', value: '', label: '' });
    const [taxId, setTaxId] = useState<string>('');

    return (
        <Layout>
            <RenderTitle title="Registration" />
            <Card
                paddings={{
                    paddingTop: 'padding30px',
                    paddingHorizontal: 'padding20px',
                    paddingBottom: 'padding30px',
                }}
                margins={{ marginTop: 'margin20px' }}
                backgroundColor="white"
                borderColor="primarylightborder">
                <LabeledTextInput
                    label="Display Name"
                    placeHolder="Eg: ABC Textiles"
                    value={displayName}
                    setValue={setDisplayName}
                />
                <LabeledTextInput
                    label="Registered Name"
                    placeHolder="Eg: ABC Pvt. Ltd"
                    value={registeredName}
                    setValue={setRegisteredName}
                    ContainerStyles={styles.lastlabeledinputstyles}
                />
                <LabeledDropdown
                    options={[
                        { key: '1', label: 'Sales & Promotions', value: '23' },
                        { key: '2', label: 'Advertising & Sales', value: '32' },
                        { key: '3', label: 'whole Sale business', value: '22' },
                        { key: '4', label: 'Sales & Development', value: '20' },
                    ]}
                    label="Business Category"
                    placeHolder="Select Category"
                    searchableTitle="Select Buisiness Category"
                    selectedItem={selectedBuisinessCatagory}
                    setSelectedItem={setSelectedBuisinessCatagory}
                />
                <LabeledItemSelector
                    options={[
                        { key: '1', label: 'Private Limited', value: '23' },
                        {
                            key: '2',
                            label: 'Limited Liability Partnership',
                            value: '32',
                        },
                        { key: '3', label: 'One-Person Company', value: '22' },
                        {
                            key: '4',
                            label: 'Nonprofit Organization',
                            value: '20',
                        },
                    ]}
                    label="Registration Type"
                    placeHolder="Select Type"
                    selectionTitle="Select Business Type"
                    selectedItem={selectedRegistrationType}
                    setSelectedItem={setSelectedRegistrationType}
                />
                <LabeledTextInput
                    label="Tax ID"
                    placeHolder="xxxx xxxx xxx"
                    value={taxId}
                    setValue={setTaxId}
                    ContainerStyles={styles.taxidtextinputstyles}
                    maxLength={10}
                    keyboardType="number-pad"
                />
            </Card>
            <Button
                style={styles.buttonstyles}
                disabled={
                    !displayName ||
                    !registeredName ||
                    !selectedBuisinessCatagory.label ||
                    !selectedRegistrationType.label ||
                    taxId.length < 10
                }
                onPress={() => {}}
            />
        </Layout>
    );
};

export default Registration;
