import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

// it('shows a comment box', () => {
//   const div = document.createElement('div');

//   ReactDOM.render(<App />, div);

//   // Looks inside the div and checks to see if the CommentBox is in there
//   expect(div.innerHTML).toContain('CommentBox component');

//   // cleanup
//   ReactDOM.unmountComponentAtNode(div);
// });
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});