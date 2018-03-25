import React from 'react';
import { shallow } from 'enzyme';
import '../testSetup.js';
import App from '../components/App';

describe('App', () => {
	const app = shallow(<App />);

	it('renders properly', () => {
		expect(app).toMatchSnapshot();
	});

	it('contains a connected viewer component', () => {
		expect(app.find('Viewer').exists()).toBe(true);
	});
});
