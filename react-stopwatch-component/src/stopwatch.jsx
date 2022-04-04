import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      time: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  count(self) {
    self.setState({ time: self.state.time + 1 });
  }

  handleClick() {
    if (this.state.isRunning) {
      this.setState({ isRunning: false });
      clearInterval(this.Timer);
    } else {
      this.setState({ isRunning: true });
      this.Timer = setInterval(this.count, 1000, this);
    }

  }

  reset() {
    if (!this.state.isRunning) {
      this.setState({ time: 0 });
    }
  }

  btnIcon() {
    return (this.state.isRunning)
      ? 'pause'
      : 'play';
  }

  render() {
    return (
      <div className='watchBox'>
        <div className="watchFace" onClick={this.reset}>
          <p className='counter'>{this.state.time}</p>
        </div>
        <button className={this.btnIcon()} onClick={this.handleClick}></button>
      </div>);
  }
}

export default StopWatch;
