import { MyFunction } from './tsmodule';

// deprecation/deprecation
MyFunction(1);

const ALLOW_CONST_UPPER_CASE = 'UPPER_CASE';

// @typescript-eslint/naming-convention @typescript-eslint/no-unused-vars prefer-const
let DISALLOW_UPPER_CASE = ALLOW_CONST_UPPER_CASE;
