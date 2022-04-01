import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicks: 0
    };
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  setClass() {
    if (this.state.clicks < 4) {
      return 'hot-button cold';
    } else if (this.state.clicks < 7) {
      return 'hot-button cool';
    } else if (this.state.clicks < 10) {
      return 'hot-button tepid';
    } else if (this.state.clicks < 13) {
      return 'hot-button warm';
    } else if (this.state.clicks < 16) {
      return 'hot-button hot';
    } else {
      return 'hot-button nuclear';
    }
  }

  render() {
    return (
      <button className={this.setClass()} onClick={this.handleClick}>
        Hot Button
      </button>);
  }
}

export default HotButton;
