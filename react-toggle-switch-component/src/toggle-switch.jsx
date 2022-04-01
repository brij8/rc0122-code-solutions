import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  setClass() {
    return (this.state.isClicked)
      ? 'tog'
      : 'gle';
  }

  render() {
    return (
      <div className='toggleBox'>
      <div className={this.setClass()} onClick={this.handleClick}>
          <div className='switch'></div>
      </div>
      <span className='togBoxtext'>{this.state.isClicked ? 'ON' : 'OFF'}</span>
      </div>);
  }
}

export default ToggleSwitch;
