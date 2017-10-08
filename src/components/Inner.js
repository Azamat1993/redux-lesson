import React, { Component } from "react";
import { connect } from "../react-redux";

import { toggle_color } from "../actions";

class Inner extends Component {
  onToggleColor(e) {
    this.props.toggle_color();
  }

  render() {
    return (
      <div onClick={this.onToggleColor.bind(this)}>
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
