import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'


import Display from '../dashboard/Dashboard'; 

describe('<Display/>', () => {
    // 2. write this test
    it('matches snapshot', () => {
      const tree = renderer.create(<Display locked={false} closed={false}/>); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });

    describe('mock functions', () => {
        it('is mocking me', () => {
          const mock = jest.fn();
    
          const result= mock('smile');
          expect(result).toBeUndefined(); //these matchers belong to jest
          expect(mock).toHaveBeenCalled();
          expect(mock).toHaveBeenCalledTimes(1);
          expect(mock).toHaveBeenCalledWith('smile');
        });
    

})

it('controls the mock', () => {
    const mock = jest.fn((x) => `hello and ${x}`);

    const result = mock('smile');

    expect(result).toBe('hello and smile');
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('smile');
  });
});