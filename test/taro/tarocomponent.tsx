import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';

// no-empty-interface
interface Props {
}

// eslint-disable-next-line import/no-unused-modules
export class TaroComponent extends Component<Props> {
    public render(): ReactNode {
        const test: ReactNode[] = [];
        // taro/manipulate-jsx-as-array
        [1, 2, 3].forEach((i) => {
            test.push(<View key={i} />);
        });
        return <View>{test}</View>;
    }
}
