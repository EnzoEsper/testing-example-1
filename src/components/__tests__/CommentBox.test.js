import React from 'react';
import CommentBox from '../CommentBox';
import { mount } from 'enzyme';

it('has a text area and a button', () => {
  const wrapped = mount(<CommentBox />);

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});