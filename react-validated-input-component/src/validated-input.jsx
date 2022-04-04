import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  // rather than DOM manip, instead make little functions to call at render that'll return the content to be rendered
  errorDisplay() {
    const pwChars = 'Password must be 8 characters.';
    const pwReq = 'A password is required.';
    if (this.state.password.length === 0) {
      return pwReq;
    } else if (this.state.password.length < 8) {
      return pwChars;
    }
  }

  iconDisplay() {
    const NO = '❌';
    const GO = '✅';
    if (this.state.password.length < 8) {
      return NO;
    }
    return GO;
  }

  render() {
    return (
      <div className='pwOuterBox'>
        <form className='pwBox'>
          <label>
            Password:
            <input type="password" className='pwInput' onChange={this.handleChange} />
          </label>
          <div className='icon'>{this.iconDisplay()}</div>
        </form>
        <p className='errorMsg'>{this.errorDisplay()}</p>
      </div>
    );
  }

}

export default ValidatedInput;
