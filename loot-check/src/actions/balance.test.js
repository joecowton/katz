import * as constants from './constants';
import * as actions from './Balance';

it('creates an action to set balance', () => {
	const balance = 0;

	const expectedAction = { type: constants.SET_BALANCE, balance };

	expect(actions.setBalance(balance)).toEqual(expectedAction);
});