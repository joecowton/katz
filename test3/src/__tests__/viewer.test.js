import React from 'react';
import { shallow } from 'enzyme';
import '../testSetup.js';
import Viewer from '../components/Viewer';

describe('Viewer', () => {
	const viewer = shallow(<Viewer />);

	it('renders properly', () => {
		expect(viewer).toMatchSnapshot();
	});
});
