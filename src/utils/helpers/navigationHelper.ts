import { StackActions, NavigationContainerRef } from '@react-navigation/native';
import { MainStackParamList, ModifiedMainStackParamList } from 'navigation/MainStack';

import { createRef } from 'react';

export const navigationRef =
    createRef<NavigationContainerRef<MainStackParamList>>();

export type ScreenNames = keyof MainStackParamList;

export type ScreenNamesComplete=keyof ModifiedMainStackParamList;
export function navigate(name: ScreenNames, params?: any) {
    navigationRef.current?.navigate(name, params);
}

export function reset(name: ScreenNamesComplete, options?: { state?: any; params?: any }) {
    navigationRef.current?.reset({
        index: 0,
        routes: [{ name, state: options?.state, params: options?.params }],
    });
}

export function push(args: any, params?: any) {
    navigationRef.current?.dispatch(StackActions.push(args, params));
}

export function pop(args: number) {
    navigationRef.current?.dispatch(StackActions.pop(args));
}
