import * as constants from './constants';
import * as actions from './Balance';

it('creates an action to set balance', () => {
	const balance = 0;

	const expectedAction = { type: constants.SET_BALANCE, balance };

	expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', () => {
	const deposit = 10;

	const expectedAction = { type: constants.DEPOSIT, deposit };

	expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', () => {
	const withdrawl = 5;

	const expectedAction = { type: constants.WITHDRAWL, withdrawl };

	expect(actions.withdrawl(withdrawl)).toEqual(expectedAction);
});
