import React, { Component } from "react";
import { connect } from "../react-redux";

import { toggle_color } from "../actions";

class Inner extends Component {
  render() {
    return (
      <div
        onClick={this.props.dispatch({
          type: "SET_WHITE"
        })}
      >
        inner
        {this.props.color}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    color: state.color
  };
};

export default connect(mapStateToProps, {
  toggle_color
})(Inner);
