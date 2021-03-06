import {formatters} from 'web3-core-helpers';
import AbstractMethod from '../../../../lib/methods/AbstractMethod';
import SetSolcMethod from '../../../../src/methods/admin/SetSolcMethod';

// Mocks
jest.mock('web3-core-helpers');

/**
 * SetSolcMethod test
 */
describe('SetSolcMethodTest', () => {
    let method;

    beforeEach(() => {
        method = new SetSolcMethod(null, formatters, {});
    });

    it('constructor check', () => {
        expect(method).toBeInstanceOf(AbstractMethod);

        expect(method.rpcMethod).toEqual('admin_setSolc');

        expect(method.parametersAmount).toEqual(1);

        expect(method.utils).toEqual(null);

        expect(method.formatters).toEqual(formatters);
    });
});
