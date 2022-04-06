import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    /* your code here */
    // v-- get the thing
    fetch('https://jsonplaceholder.typicode.com/users')
    // v-- run the thing thru .json
      .then(response => response.json())
    // v-- put the thing in state & update it so it loads in render
      .then(data => this.setState({
        users: data,
        isLoading: false
      }));
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
