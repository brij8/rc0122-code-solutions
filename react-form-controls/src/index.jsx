import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange should update the component's state each time the email <input> changes
  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  // handleSubmit should prevent the default form submission behavior and log the component's state to the console
  handleSubmit(event) {
    event.preventDefault();
    console.log('state: ', this.state);
  }

  // renders a <form> containing one <input> for an email address and a <button>
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          email:
          <input type="text" value={this.state.email} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
