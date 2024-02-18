import {
    BorderRadiusTypes,
    FontSizesTypes,
    FontVariantsTypes,
    FontsStylesTypes,
    HeightTypes,
    MarginTypes,
    OpacityTypes,
    PaddingTypes,
} from './themes';

export type PrimaryColorTypes = 'primary' | 'primarydark' | 'primarylight';

export enum CurrencySymbol {
    INR = '₹',
    USD = '$',
    EUR = '€',
    GBP = '£',
    JPY = '¥',
    CNY = '¥',
    AUD = '$',
    CAD = '$',
    CHF = 'Fr',
    NZD = '$',
    SGD = '$',
    HKD = 'HK$',
    AED = 'د.إ',
    ZAR = 'R',
    SAR = 'ر.س',
    MXN = '$',
    BRL = 'R$',
    ARS = '$',
    SEK = 'kr',
    NOK = 'kr',
    DKK = 'kr',
    PLN = 'zł',
    KRW = '₩',
}

export type CurrencyCode = keyof typeof CurrencySymbol;

export type MarginPropMappings = {
    margin?: keyof MarginTypes;
    left?: keyof MarginTypes;
    right?: keyof MarginTypes;
    top?: keyof MarginTypes;
    bottom?: keyof MarginTypes;
    marginLeft?: keyof MarginTypes;
    marginRight?: keyof MarginTypes;
    marginTop?: keyof MarginTypes;
    marginBottom?: keyof MarginTypes;
    marginVertical?: keyof MarginTypes;
    marginHorizontal?: keyof MarginTypes;
};

export type PaddingPropMappings = {
    padding?: keyof PaddingTypes;
    paddingLeft?: keyof PaddingTypes;
    paddingRight?: keyof PaddingTypes;
    paddingTop?: keyof PaddingTypes;
    paddingBottom?: keyof PaddingTypes;
    paddingVertical?: keyof PaddingTypes;
    paddingHorizontal?: keyof PaddingTypes;
};

export type BorderRadiusPropMappings = {
    borderRadius?: keyof BorderRadiusTypes;
    borderTopLeftRadius?: keyof BorderRadiusTypes;
    borderTopRightRadius?: keyof BorderRadiusTypes;
    borderBottomLeftRadius?: keyof BorderRadiusTypes;
    borderBottomRightRadius?: keyof BorderRadiusTypes;
};

export interface FlexTypes {
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'stretch'
        | 'space-between'
        | 'space-around';
    flex?: number;
}

export type FontSizeValuesTypes = keyof FontSizesTypes;
export type OpacityValuesTypes = keyof OpacityTypes;
export type FontVariantValuesTypes = keyof FontVariantsTypes;
export type FontStyleValuesTypes = keyof FontsStylesTypes;
export type HeightValuesTypes = keyof HeightTypes;
export type BorderRadiusValuesTypes = keyof BorderRadiusTypes;

export type MarginsValuesTypes = {
    [key in keyof MarginPropMappings]?: keyof MarginTypes;
};
export type PaddingsValuesTypes = {
    [key in keyof PaddingPropMappings]?: keyof PaddingTypes;
};

export type DropdownObject = {
    key: string;
    value: string;
    label: string;
};
