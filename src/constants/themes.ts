import { Dimensions, StyleSheet, TextStyle } from 'react-native';
import colors from './colors';

const { width, height } = Dimensions.get('window');

export interface OpacityTypes {
    '0': number;
    '0.05': number;
    '0.1': number;
    '0.2': number;
    '0.25': number;
    '0.30': number;
    '0.40': number;
    '0.50': number;
    '0.60': number;
    '0.70': number;
    '0.75': number;
    '0.80': number;
    '0.90': number;
    '0.95': number;
    '1': number;
}

export const OPACITY: OpacityTypes = {
    '0': 0,
    '0.05': 0.05,
    '0.1': 0.1,
    '0.2': 0.2,
    '0.25': 0.25,
    '0.30': 0.3,
    '0.40': 0.4,
    '0.50': 0.5,
    '0.60': 0.6,
    '0.70': 0.7,
    '0.75': 0.75,
    '0.80': 0.8,
    '0.90': 0.9,
    '0.95': 0.95,
    '1': 1,
};

export interface FontSizesTypes {
    verySmall1: number;
    verySmall2: number;
    verySmall3: number;
    small1: number;
    small2: number;
    small3: number;
    normal: number;
    heading1: number;
    heading2: number;
    body1: number;
    body2: number;
    body3: number;
    body4: number;
    body5: number;
}

export const FONT_SIZES: FontSizesTypes = {
    verySmall1: 10,
    verySmall2: 9,
    verySmall3: 8,
    small1: 12,
    small2: 13,
    small3: 14,
    normal: 15,
    heading1: 32,
    heading2: 30,
    body1: 14,
    body2: 16,
    body3: 18,
    body4: 20,
    body5: 22,
};

export type MarginTypes = {
    marginSmall: number;
    marginMedium: number;
    marginLarge: number;
    margin10px: number;
    margin20px: number;
    margin30px: number;
    margin40px: number;
    margin50px: number;
};

export const MARGIN_SIZES: MarginTypes = {
    marginSmall: 2.5,
    marginMedium: 5,
    marginLarge: 15,
    margin10px: 10,
    margin20px: 20,
    margin30px: 30,
    margin40px: 40,
    margin50px: 50,
};

export type PaddingTypes = {
    paddingSmall: number;
    paddingMedium: number;
    paddingLarge: number;
    padding10px: number;
    padding20px: number;
    padding30px: number;
    padding40px: number;
    padding50px: number;
};

export const PADDING_SIZES: PaddingTypes = {
    paddingSmall: 5,
    paddingMedium: 15,
    paddingLarge: 25,
    padding10px: 10,
    padding20px: 20,
    padding30px: 30,
    padding40px: 40,
    padding50px: 50,
};

export type BorderRadiusTypes = {
    borderRadiusSmall: number;
    borderRadiusMedium: number;
    borderRadiusLarge: number;
    borderRadiusXLarge: number;
    borderRadiusXXLarge: number;
};

export const BORDER_RADIUS_SIZES: BorderRadiusTypes = {
    borderRadiusSmall: 5,
    borderRadiusMedium: 10,
    borderRadiusLarge: 20,
    borderRadiusXLarge: 50,
    borderRadiusXXLarge: 100,
};

export type HeightTypes = {
    heightSmall: number;
    heightMedium: number;
    heightLarge: number;
    heightDimension: number;
};

export const HEIGHT_SIZES: HeightTypes = {
    heightSmall: 30,
    heightMedium: 42,
    heightLarge: 60,
    heightDimension: height,
};

export type WidthTypes = {
    widthSmall: number;
    widthMedium: number;
    widthLarge: number;
    widthDimension: number;
};

export const WIDTH_SIZES: WidthTypes = {
    widthSmall: 20,
    widthMedium: 30,
    widthLarge: 40,
    widthDimension: width,
};

export type FontFamilyTypes =
    | 'Montserrat-Regular'
    | 'Montserrat-Bold'
    | 'Montserrat-Light'
    | 'Montserrat-Medium'
    | 'Montserrat-SemiBold'
    | 'Montserrat-ExtraLight'
    | 'Montserrat-Black'
    | 'Montserrat-ExtraBold';

export interface FontVariantsTypes {
    bold: FontFamilyTypes;
    semiBold: FontFamilyTypes;
    medium: FontFamilyTypes;
    regular: FontFamilyTypes;
    light: FontFamilyTypes;
}

export const FONT_VARIANT: FontVariantsTypes = {
    bold: 'Montserrat-Bold',
    semiBold: 'Montserrat-SemiBold',
    medium: 'Montserrat-Medium',
    regular: 'Montserrat-Regular',
    light: 'Montserrat-Light',
};

export interface FontsObjectValueTypes extends Partial<TextStyle> {
    fontFamily: FontFamilyTypes;
    fontSize: number;
}

export interface FontsStylesTypes {
    normal: FontsObjectValueTypes;
    titleBold: FontsObjectValueTypes;
    titleLight: FontsObjectValueTypes;
    body1: FontsObjectValueTypes;
    body2: FontsObjectValueTypes;
    body3: FontsObjectValueTypes;
    body4: FontsObjectValueTypes;
    body5: FontsObjectValueTypes;
    buttonFont: FontsObjectValueTypes;
}

export const FONT_STYLES: FontsStylesTypes = {
    normal: {
        fontFamily: 'Montserrat-Regular',
        fontSize: FONT_SIZES.normal,
        color: colors.black,
    },
    titleBold: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: FONT_SIZES.heading1,
        color: colors.primarydark,
        letterSpacing: -0.64,
        lineHeight: 45,
    },
    titleLight: {
        fontFamily: 'Montserrat-Regular',
        fontSize: FONT_SIZES.heading1,
        color: colors.black,
        letterSpacing: -2.56,
        lineHeight: 45,
        opacity: 0.6,
    },
    buttonFont: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: FONT_SIZES.body2,
        color: colors.white,
        letterSpacing: 0.64,
    },
    body1: { fontFamily: 'Montserrat-Regular', fontSize: FONT_SIZES.body1 },
    body2: { fontFamily: 'Montserrat-Regular', fontSize: FONT_SIZES.body2 },
    body3: { fontFamily: 'Montserrat-Regular', fontSize: FONT_SIZES.body3 },
    body4: { fontFamily: 'Montserrat-Light', fontSize: FONT_SIZES.body4 },
    body5: {
        fontFamily: 'Montserrat-Light',
        fontSize: FONT_SIZES.body5,
    },
};

interface ShadowStylesTypes {
    shadowColor: string;
    shadowRadius: number;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    elevation: number;
}

interface Styles {
    shadow: ShadowStylesTypes;
}

export const STYLES: Styles = StyleSheet.create({
    shadow: {
        shadowColor: colors.black,
        shadowRadius: 8,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.07,
        elevation: 5,
    },
});

interface AppThemeTypes {
    FONT_SIZES: FontSizesTypes;
    FONT_STYLES: FontsStylesTypes;
    FONT_VARIANT: FontVariantsTypes;
    MARGIN_SIZES: MarginTypes;
    PADDING_SIZES: PaddingTypes;
    BORDER_RADIUS_SIZES: BorderRadiusTypes;
    HEIGHT_SIZES: HeightTypes;
    WIDTH_SIZES: WidthTypes;
    STYLES: Styles;
}

const appTheme: AppThemeTypes = {
    FONT_SIZES,
    FONT_STYLES,
    FONT_VARIANT,
    MARGIN_SIZES,
    PADDING_SIZES,
    BORDER_RADIUS_SIZES,
    HEIGHT_SIZES,
    WIDTH_SIZES,
    STYLES,
};

export default appTheme;
