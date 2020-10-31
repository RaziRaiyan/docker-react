import React from 'react';
import App from './App';
import './setupTests';
import {shallow} from 'enzyme';


export const findByTestAttribute = (wrapper, attribute) => {
    const component =  wrapper.find(`[data-test='${attribute}']`);
    return component;
}

describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    })

    it('Should render app component', () => {
        const button = findByTestAttribute(wrapper, 'AppComponent');
        expect(button.length).toBe(1);
    });
});