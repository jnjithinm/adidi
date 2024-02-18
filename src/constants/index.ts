import screens from './screens';
import { default as colors } from './colors';
import themes from './themes';
import images from './images';
import templates from './template';

export type { PrimaryColorTypes, CurrencySymbol } from './types';

export default {
    screens,
    colors,
    ...themes,
    images,
    templates,
};
