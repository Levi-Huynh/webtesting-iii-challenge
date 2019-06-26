import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'


import Dashboard from '../dashboard/Dashboard'; 

describe('<Dashboard/>', () => {
    // 2. write this test
    it('matches snapshot', () => {
      const tree = renderer.create(<Dashboard locked={false} closed={false}/>); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });
  
    it('should update message dynamically', () => {
        const toggleLocked = jest.fn();

      const {queryByText, getByText} = render(<Dashboard toggleLocked={toggleLocked}/>);
  
   const button1=   getByText(/Lock Gate/i); //implict assertion
      expect(queryByText(/mocking me/i)).toBeFalsy();
  
      //button always says speak based on speaker component so grab it by that text
     const button2 = queryByText(/Open/i);
    //   expect(queryByText(/mocking me/i)).toBeFalsy();
  
      fireEvent.click(button1);
       
      fireEvent.click(button2);
    //   expect(toggleLocked).toHaveBeenCalled();
    //   expect(toggleLocked).toHaveBeenCalledTimes(1);

//    fireEvent.click(button2);

  
      expect(queryByText(/nothing to say/i)).toBeFalsy();
     
    })
  });