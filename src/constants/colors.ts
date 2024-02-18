export type ColorTypes =
    | 'primarydark'
    | 'primary'
    | 'primarylight'
    | 'primarylightborder'
    | 'greennotification'
    | 'red'
    | 'white'
    | 'black'
    | 'transparent'
    | 'lightgrey'
    | 'lineargradientbutton1'
    | 'lineargradientbutton2'
    | 'lineargradientbuttondisabled'
    | 'iconbuttondisabled'
    | 'primarylight1'
    | 'primarylight2'
    | 'modaloutsidecolor';

const colors: Record<ColorTypes, string> = {
    primarydark: '#005D56',
    primary: '#B8D87ECC',
    primarylight: 'rgba(184, 216, 126, 0.4)',
    primarylightborder: 'rgba(184, 216, 126, 0.60)',
    greennotification: '#2CB34A',
    red: '#FA3E3E',
    white: '#F8F8F8',
    black: '#161E1E',
    transparent: 'transparent',
    lightgrey: 'rgba(0, 93, 86, 0.04)',
    lineargradientbutton1: '#005D56',
    lineargradientbutton2: '#003737',
    lineargradientbuttondisabled: 'rgba(5, 58, 56, 0.20)',
    iconbuttondisabled: 'rgba(0, 93, 86, 0.10)',
    primarylight1: 'rgba(184, 216, 126, 0.30)',
    primarylight2: 'rgba(184, 216, 126, 0.25)',
    modaloutsidecolor: 'rgba(0,0,0,0.5)',
};

export default colors;
