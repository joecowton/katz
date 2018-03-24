import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './wallet';

describe('Wallet', () => {
	const props = { balance: 20 };
	const wallet = shallow(<Wallet {...props} />);

	it('renders properly', () => {
		expect(wallet).toMatchSnapshot();
	});

	it('displays balance from props', () => {
		expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
	});

	it('creates an input to deposit into or withdraw from', () => {
		expect(wallet.find('.input-wallet').exists()).toBe(true);
	});

	describe('when user types into a wallet input', () => {
		const userBalance = '25';

		beforeEach(() => {
			wallet
				.find('.input-wallet')
				.simulate('change', { target: { value: userBalance } });
		});

		it('updates the local wallet balance and converts to a number', () => {
			expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
		});
	});
});
