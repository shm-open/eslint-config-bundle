import React, { Component, ReactNode, useCallback } from 'react';
import { View } from 'react-native';
import Utils from './platform';

const myHook = () => useCallback(() => {}, []);

interface TextProps {
    someProps: string;
    userId: string[];
}

export const Sth = <T, _>(arg: T): T => {
    console.log('abc');
    return arg;
};

const myId = 0;
console.log(myId);

export default class Text extends Component<TextProps> {
    public render(): ReactNode {
        const { someProps } = this.props;
        return (
            <View>
                {'123'}
                <View>
                    {someProps}
                    <div tabIndex="5"></div>
                </View>
            </View>
        );
    }
}
