import React, { useState } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';

import Text from '../../components/Text/Text';
import Layout from 'components/Layout/Layout';
import Card from 'components/Card/Card';
import Icon from 'components/Icon/Icon';
import PeriodButton, {
    PeriodTypes,
} from 'components/PeriodButton/PeriodButton';
import { MarginsValuesTypes } from 'constants/types';
import HorizontalLine from 'components/HorizontalLine/HorizontalLine';
import TrendStatus from 'components/TrendStatus/TrendStatus';
import DataDescriptor from 'components/DataDescriptor/DataDescriptor';
import IndicatorBar from 'components/IndicatorBar/IndicatorBar';
import styles from './Home.styles';

const periods: PeriodTypes[] = ['D', 'W', 'M', '3M', '6M'];

const Home = () => {
    const [selectedPeriod, setSelectedPeriod] = useState<PeriodTypes>('D');

    let horizontalMarginStyle: MarginsValuesTypes = {
        marginHorizontal: 'margin20px',
    };
    let horizontalMarginViewStyle: ViewStyle = {
        marginHorizontal: 20,
    };

    return (
        <Layout overridePaddingHorizontal linearGradient>
            <Card
                backgroundColor="primary"
                height="heightLarge"
                flexDirection="row"
                paddings={{
                    paddingHorizontal: 'paddingMedium',
                }}
                margins={{ ...horizontalMarginStyle }}
                justifyContent="space-between"
                alignItems="center">
                <View style={styles.TickIconCompleteProfileCombiner}>
                    <View style={styles.TickIconContainer}>
                        <Icon name="TickIcon" />
                    </View>
                    <Text
                        margins={{
                            left: 'margin10px',
                        }}
                        size="body1">
                        Complete your profile
                    </Text>
                </View>
                <Icon name="RightIcon" />
            </Card>
            <Card
                margins={{
                    marginTop: 'marginMedium',
                    ...horizontalMarginStyle,
                }}>
                <View style={styles.flexDirectionToRow}>
                    <Text fontStyle="titleLight">Let's</Text>
                    <Text
                        fontStyle="titleBold"
                        margins={{ marginHorizontal: 'margin10px' }}>
                        grow
                    </Text>
                    <Text fontStyle="titleLight">your</Text>
                </View>
                <View style={styles.flexDirectionToRow}>
                    <Text fontStyle="titleLight">business</Text>
                    <Text
                        fontStyle="titleBold"
                        margins={{ left: 'margin10px' }}>
                        together!
                    </Text>
                </View>
            </Card>
            <View style={styles.marginVerticalTo25}>
                <Text
                    fontVariant="medium"
                    opacity="0.70"
                    margins={{ left: 'margin20px' }}>
                    Filter By: Day
                </Text>
                <ScrollView
                    contentContainerStyle={styles.PeriodButtonScrollContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    {periods.map((item, index) => (
                        <PeriodButton
                            period={item}
                            selected={item === selectedPeriod}
                            setSelectedPeriod={setSelectedPeriod}
                            key={index}
                        />
                    ))}
                </ScrollView>
            </View>
            <View style={{ ...horizontalMarginViewStyle }}>
                <Text fontVariant="medium">Sales Report</Text>
                <Card
                    paddings={{
                        paddingVertical: 'padding20px',
                        paddingHorizontal: 'padding20px',
                    }}
                    margins={{
                        marginTop: 'margin10px',
                        marginHorizontal: 'marginSmall',
                    }}
                    backgroundColor="white"
                    borderColor="primarylightborder">
                    <View>
                        <IndicatorBar
                            value={20000}
                            maxValue={50000}
                            backgroundColor="primary"
                        />
                        <IndicatorBar
                            value={40000}
                            maxValue={50000}
                            backgroundColor="primarydark"
                        />
                    </View>
                    <View style={styles.marginVerticalTo5}>
                        <DataDescriptor
                            color="primary"
                            label="Previous Day Sales"
                            value={20000}
                        />
                        <DataDescriptor
                            color="primarydark"
                            label="Sales Today"
                            value={40000}
                            sign="greenSign"
                        />
                    </View>
                    <HorizontalLine marginVertical={10} />
                    <TrendStatus
                        percentage={50}
                        message="Sales Boom"
                        variationType="rise"
                    />
                </Card>
                <Card
                    backgroundColor="primarylight"
                    paddings={{
                        paddingVertical: 'padding10px',
                        paddingHorizontal: 'padding20px',
                    }}
                    borderRadius="borderRadiusLarge"
                    margins={{ marginVertical: 'margin20px' }}
                    width={'100%'}>
                    <TrendStatus
                        percentage={10}
                        message="New customers today"
                        fontVariant="medium"
                        variationType="rise"
                    />
                </Card>
                <Card
                    borderColor="primarylightborder"
                    paddings={{
                        paddingHorizontal: 'padding20px',
                        paddingVertical: 'padding20px',
                    }}
                    margins={{
                        marginBottom: 'margin20px',
                    }}>
                    <View>
                        <Text fontVariant="medium" color="black" opacity="0.80">
                            Amount Of Coupon Send
                        </Text>
                        <IndicatorBar
                            value={500}
                            maxValue={2000}
                            backgroundColor="primary"
                            horizontalLineOpacity="0.2"
                            showValue
                        />
                    </View>
                    <View style={styles.marginTopTo10}>
                        <Text fontVariant="medium" opacity="0.80">
                            Amount Of Coupon Claimed
                        </Text>
                        <IndicatorBar
                            value={5000}
                            maxValue={10000}
                            backgroundColor="primarydark"
                            horizontalLineOpacity="0.2"
                            showValue
                        />
                    </View>

                    <View style={styles.marginTopTo15}>
                        <DataDescriptor
                            label="no. Of Coupons Send:"
                            value={2}
                            color="primary"
                            textOpacity="0.80"
                        />
                        <DataDescriptor
                            label="no. Of Coupons Claimed:"
                            value={10}
                            color="primarydark"
                            textOpacity="0.80"
                        />
                    </View>
                </Card>
            </View>
        </Layout>
    );
};

export default Home;
