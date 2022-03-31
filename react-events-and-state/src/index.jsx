import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }
  // -- or --
  // handleClick() {
  // this.setState({ isClicked: !this.state.isClicked });
  // }

  render() {
    return (
    <button onClick={this.handleClick}>
        {this.state.isClicked ? 'un-Clicky' : 'Clicky'}
    </button>);
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);

// in React 18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<CustomButton />);
