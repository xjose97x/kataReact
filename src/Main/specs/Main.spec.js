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

  describe('Matrix transpose', () => {
    it('should transpose array', () => {
      const matrix = [
        [1,2,3],
        [4,5,6]
      ];
      expect(instance.transpose(matrix)).toEqual([
        [1,4],
        [2,5],
        [3,6]
      ]);
    });
  });

  describe('Matrix spiral', () => {
    it('should output spiral matrix', () => {
      const matrix1 = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      const matrix2 = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
      ];
      const matrix3 = [
        [1,2,3,4,5,6],
        [7,8,9,10,11,12],
        [13,14,15,16,17,18]
      ];

      expect(instance.spiral(matrix1)).toEqual('1 2 3 6 9 8 7 4 5');
      expect(instance.spiral(matrix2)).toEqual('1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10');
      expect(instance.spiral(matrix3)).toEqual('1 2 3 4 5 6 12 18 17 16 15 14 13 7 8 9 10 11');
    });
  });

});
