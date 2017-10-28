import React from 'react';
import {shallow} from 'enzyme';
import Line from '../Line';

describe('Line', () => {
  let component;
  let instance;
  let props;
  
  beforeEach(() => {
    props = {};

    component = shallow(<Line {...props}/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });
  });
});
