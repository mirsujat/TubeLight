import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<NavigationItems />);
	});

	it('Should render two <NavigationItem /> element if not Authenticate', () => {
		expect(wrapper.find(NavigationItem)).toHaveLength(2);
	});

	it('Should render three <NavigationItem /> element if  Authenticate', () => {
		//wrapper = shallow(<NavigationItems isAuthenticated />);
		wrapper.setProps({ isAuthenticated: true });
		expect(wrapper.find(NavigationItem)).toHaveLength(3);
	});

	it('Should render one <NavigationItem /> element with logout', () => {
		wrapper.setProps({ isAuthenticated: true });
		expect(
			wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
		).toEqual(true);
	});
});
