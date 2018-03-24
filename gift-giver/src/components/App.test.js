import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import setupTests from '../setupTest.js';

const app = shallow(<App />);

describe('App', () => {
	it('renders correctly', () => {
		expect(app).toMatchSnapshot();
	});

	it('initializes the state with an empty list', () => {
		expect(app.state().gifts).toEqual([]);
	});

	it('adds a new gift to state when clicking add gift', () => {
		app.find('.btn-add').simulate('click');

		expect(app.state().gifts).toEqual([{ id: 1 }]);
	});

	it('adds a new gift to rendered list when clicked', () => {
		app.find('.btn-add').simulate('click');

		expect(app.find('.gift-list').children().length).toEqual(2);
	});
});
