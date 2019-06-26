import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'


import Control from '../dashboard/Dashboard'; 

describe('<Control/>', () => {
    // 2. write this test
    it('matches snapshot', () => {
      const tree = renderer.create(<Control locked={false} closed={false}/>); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });

});