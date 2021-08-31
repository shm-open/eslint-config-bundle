import { FunctionComponent } from 'react';
import { View } from 'react-native';


interface Props {
    someProps: string;
    // naming-convention
    userId: string[];
}

// eslint-disable-next-line import/no-unused-modules
export const TSComponent: FunctionComponent<Props> = (props) => {
    const { someProps } = props;
    return (
        <View>
            {'123'}
            <View>
                {someProps}
                <div tabIndex="5"></div>
            </View>
          </View>
    );
};
// prettier
TSComponent.displayName = "TSComponent";
