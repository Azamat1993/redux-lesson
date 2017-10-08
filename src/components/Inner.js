import React, { Component } from "react";
import { connect } from "../react-redux";

import { toggle_color, input } from "../actions";

class Inner extends Component {
  onToggleColor(e) {
    this.props.toggle_color();
  }

  onKeyUp(e) {
    this.props.input(e.target.value);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div onClick={this.onToggleColor.bind(this)}>
          inner
          {this.props.color}
        </div>
        <input type="text" onChange={this.onKeyUp.bind(this)} />
        {this.props.text}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    color: state.color,
    text: state.text
  };
};

export default connect(mapStateToProps, {
  toggle_color,
  input
})(Inner);
