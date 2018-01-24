import React from 'react';
import ReactDOM from 'react-dom';
import Twitter from './Twitter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Twitter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
