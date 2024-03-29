import React from "react";

class MyCustomButton extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        disabled={this.props.disabled}
        className="btn"
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default MyCustomButton;
