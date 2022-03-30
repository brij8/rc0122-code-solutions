import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>Click me!</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(CustomButton());

// this also works
// root.render(<CustomButton />);

// React 17 version:
// ReactDOM.render(<CustomButton />, document.querySelector('#root'));
