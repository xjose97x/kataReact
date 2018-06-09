import React from 'react';
import {shallow} from 'enzyme';
import Exercise2 from '../Exercise2';

describe('Exercise2', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Exercise2/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });
  });
});
