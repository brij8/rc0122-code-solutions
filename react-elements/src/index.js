import React from 'react';
import ReactDOM from 'react-dom';

const bucket = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(bucket);
