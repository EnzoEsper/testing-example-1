import React from 'react';
import CommentBox from '../CommentBox';
import { mount } from 'enzyme';
import Root from '../../Root';

let wrapped;
beforeEach(() => {
  wrapped = mount(
  <Root>
    <CommentBox />
  </Root>
  );
});

afterEach(() => {
  // cleanup
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'new comment'
      }
    });
    
    // forcing the component to rerender
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual("new comment");
  });
  
  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    
    expect(wrapped.find('textarea').prop('value')).toEqual("");
  });
})