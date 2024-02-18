import React, { FC, ReactNode } from 'react';
import { SvgProps } from 'react-native-svg';

import HomeIcon from '../../assets/icons/home_inactive.svg';
import FavIcon from '../../assets/icons/fav_icon.svg';
import PlusIcon from '../../assets/icons/plus.svg';
import RightIcon from '../../assets/icons/right.svg';
import TickIcon from '../../assets/icons/icon_tick.svg';
import ArrowRiseIcon from '../../assets/icons/arrow_rise.svg';
import ArrowFallIcon from '../../assets/icons/arrow_fall.svg';
import TabIcon from '../../assets/icons/Subtract.svg';
import RectangelIcon from '../../assets/icons/RectangleContainer.svg';
import Logo from '../../assets/icons/Logo.svg';
import Phone from '../../assets/icons/icon_phone.svg';
import Email from '../../assets/icons/icon_email.svg';
import arrow_down from '../../assets/icons/arrow_down.svg';
import close_icon from '../../assets/icons/close_icon.svg';
import arrow_right from '../../assets/icons/arrow_right.svg';

const Icons = {
    HomeIcon,
    FavIcon,
    PlusIcon,
    RightIcon,
    TickIcon,
    ArrowFallIcon,
    ArrowRiseIcon,
    TabIcon,
    RectangelIcon,
    Logo,
    Phone,
    Email,
    arrow_down,
    close_icon,
    arrow_right,
};

export type IconsTypes = keyof typeof Icons;

export type IconTypes = {
    name: keyof typeof Icons;
    children?: ReactNode;
} & SvgProps;

const Icon: FC<IconTypes> = ({ name, children, ...restProps }) => {
    const IconComponent = Icons[name];
    if (!IconComponent) {
        console.warn(`Icon '${name}' not found.`);
        return null;
    }
    return (
        <>
            <IconComponent {...restProps} />
            {children}
        </>
    );
};

export default Icon;
