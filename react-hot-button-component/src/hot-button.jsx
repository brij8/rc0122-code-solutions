import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicks: 0,
      className: 'hot-button cold'
    };
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
    if (this.state.clicks < 4) {
      this.setState({ className: 'hot-button cold' });
    } else if (this.state.clicks < 7) {
      this.setState({ className: 'hot-button cool' });
    } else if (this.state.clicks < 10) {
      this.setState({ className: 'hot-button tepid' });
    } else if (this.state.clicks < 13) {
      this.setState({ className: 'hot-button warm' });
    } else if (this.state.clicks < 16) {
      this.setState({ className: 'hot-button hot' });
    } else {
      this.setState({ className: 'hot-button nuclear' });
    }
  }

  render() {
    return (
      <button className={this.state.className} onClick={this.handleClick}>
        Hot Button
      </button>);
  }
}

export default HotButton;
