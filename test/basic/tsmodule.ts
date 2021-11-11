// spaced-comment
//comment that doesn't have space

// naming-convention no-default-export
export default class className {
    private member: string;
}

export interface MyInterface {
    // prettier/prettier
    member: string,

    // ban-ts-comment
    // @ts-ignore
    bandType: object;
}

/**
 * @deprecated will be removed soon
 */
// no-unused-var no-explict-any
export const MyFunction = (a: any) => {
    return 1;
};
