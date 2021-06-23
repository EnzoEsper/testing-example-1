import React from 'react';
import CommentBox from '../CommentBox';
import { mount } from 'enzyme';

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  // cleanup
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: {
      value: 'new comment'
    }
  });
  
  // forcing the component to rerender
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual("new comment");
});

it('when form is submitted, text area gets emptied', () => {
  wrapped.find('textarea').simulate('change', {
    target: {
      value: 'new comment'
    }
  });
  
  // forcing the component to rerender
  wrapped.update();

  wrapped.find('form').simulate('submit');
  wrapped.update();
  
  expect(wrapped.find('textarea').prop('value')).toEqual("");
});