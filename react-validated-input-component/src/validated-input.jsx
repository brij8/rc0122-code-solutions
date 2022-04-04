import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
    const $err = document.querySelector('.errorMsg');
    const $icon = document.querySelector('.icon');
    if (event.target.value.length < 8) {
      $err.innerHTML = 'Password must be 8 characters.';
      $icon.innerHTML = '❌';
    } else if (event.target.value.length === 0) {
      $err.innerHTML = 'A password is required.';
      $icon.innerHTML = '❌';
    } else {
      $err.innerHTML = '';
      $icon.innerHTML = '✅';
    }
  }

  render() {
    return (
      <div className='pwOuterBox'>
        <form className='pwBox'>
          <label>
            Password:
            <input type="password" className='pwInput' onChange={this.handleChange} />
          </label>
          <div className='icon'>❌</div>
        </form>
        <p className='errorMsg'>A password is required.</p>
      </div>
    );
  }

  // <div className='pwOuterBox'>
  //   <label>Password</label>
  //   <div className='pwBox'>
  //     <input type='password' id='password' className='pwInput' />
  //     <div className='icon'>X</div>
  //   </div>
  //   <p className='errorMsg'></p>
  // </div>

}

export default ValidatedInput;
