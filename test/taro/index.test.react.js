import React, { Component, useCallback } from 'react';
import { View } from 'react-native';
import Text from './text';

const myHook = () => useCallback(() => {}, []);

export default class demo extends Component {
    static propTypes = {
        test: 'string',
    };

    befaut = (b) => {
        const a = 1 * b;
        return a;
    };

    render() {
        const callback = useCallback(() => {}, []);
        const { test } = this.props;
        /*  return (<div>
            <span tabIndex="5"></span>
            </div>);
        */
        return (
            <View callback={callback}>
                123
                <Text someProps={1}>123</Text>
            </View>
        );
    }
}
