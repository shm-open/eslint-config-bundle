import { MyFunction } from './tsmodule';

// deprecation/deprecation
MyFunction(1);

const ALLOW_CONST_UPPER_CASE = 'UPPER_CASE';

// @typescript-eslint/naming-convention @typescript-eslint/no-unused-vars prefer-const
let DISALLOW_UPPER_CASE = ALLOW_CONST_UPPER_CASE;

const objLiterals = {
    camelMember: 'camelMember',
    snake_member: 'snake_member',
    '123': 123,
    'abc.123': 'abc.123',
    __html: 'html',
    // @typescript-eslint/naming-convention
    Yes: 'yes',
};

// @typescript-eslint/no-unused-vars
const { snake_member } = objLiterals;
