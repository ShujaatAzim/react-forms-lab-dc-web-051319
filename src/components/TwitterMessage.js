import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message} id="message" onChange={this.handleChange} />
        <h1>{this.props.maxChars - this.state.message.length}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
