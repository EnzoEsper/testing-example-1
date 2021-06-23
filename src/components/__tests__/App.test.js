import React from 'react';
// import ReactDOM from 'react-dom';
import App from 'components/App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// it('shows a comment box', () => {
//   const div = document.createElement('div');

//   ReactDOM.render(<App />, div);

//   // Looks inside the div and checks to see if the CommentBox is in there
//   expect(div.innerHTML).toContain('CommentBox component');

//   // cleanup
//   ReactDOM.unmountComponentAtNode(div);
// });

it('shows a comment box', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentList).length).toEqual(1);
});