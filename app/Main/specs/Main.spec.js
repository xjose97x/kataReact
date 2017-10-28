import React from 'react';
import {shallow} from 'enzyme';
import Main from '../Main';

describe('Main', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Main/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });
  });
});
