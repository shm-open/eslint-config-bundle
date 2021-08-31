import { useCallback, useEffect } from 'react';
import { View } from 'react-native';

// react-hooks/rules-of-hooks
const myHook = () => useCallback(() => {}, []);

// react/display-name
// eslint-disable-next-line import/no-unused-modules
export const MyComponent = (props) => {
    myHook();
    const callback = useCallback(() => {}, []);
    useEffect(() => {
        callback();
    });
    // no-unused-vars react/prop-types
    const { test } = props;
    return (
        <View callback={callback}>
            {'123'}
            {/* jsx-no-undef */}
            <Text someProps={1}>{'123'}</Text>
          {/* prettier */}
          </View>
    );
};
