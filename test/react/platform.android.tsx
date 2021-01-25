import React from 'react';
import { Text } from 'react-native';

export default class Utils {
    test();
}

const myAbc = 1;

export const MyComponent = () => {
    return (
        <Text>
            {'my string'}
            <Text>{'nested string'}</Text>
        </Text>
    );
};
