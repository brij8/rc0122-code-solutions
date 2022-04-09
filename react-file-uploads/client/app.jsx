import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: ''
    };
    this.fileInputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCaptionChange = this.handleCaptionChange.bind(this);
  }

  handleCaptionChange(event) {
    this.setState({ caption: event.target.value });
  }

  handleSubmit(event) {
    // v--- my code ---v
    //* Prevent the browser's default behavior for form submissions.
    event.preventDefault();
    // * Create a `new` FormData object
    // * Append two entries to the form data object you created.
    // * 1. "caption" the value of this.state.caption
    // * 2. "image" the value of this.fileInputRef.current.files[0]
    const formData = new FormData();
    formData.append('caption', 'this.state.caption');
    formData.append('image', 'this.fileInputRef.current.files[0]');
    // * Use fetch() to send a POST request to /api/uploads. The body
    // * should be the form data object you created(not a JSON string)
    // * Headers are not necessary as fetch will use the correct Content - Type
    // * automatically(multiplart / form - data).
    const req = {
      method: 'POST',
      body: formData
    };
    fetch('/api/uploads', req)
    //* parse the JSON response body
      .then(response => response.json())
    //*   log the parsed response body
      .then(data => console.log('response.json: ', data));
    //*   set the caption state back to an empty string
    this.setState({ caption: '' });
    //*   assign null to this.fileInputRef.current.value to clear the file
    this.fileInputRef.current.value = null;
    // * Catch any error in the promise chain.
    req.catch(err => {
      console.err(err);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
          <div className="col-4">
            <h3 className="text-center mb-5">React File Uploads</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Caption
                </label>
                <input
                  required
                  autoFocus
                  type="text"
                  id="caption"
                  name="caption"
                  value={this.state.caption}
                  onChange={this.handleCaptionChange}
                  className="form-control bg-light" />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <input
                  required
                  type="file"
                  name="image"
                  ref={this.fileInputRef}
                  accept=".png, .jpg, .jpeg, .gif" />
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
