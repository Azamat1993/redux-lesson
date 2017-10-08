import React, { Component } from "react";
import { connect } from "../react-redux";

class Inner extends Component {
  onToggleColor(e) {
    this.props.dispatch({
      type: "SET_WHITE"
    });
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

export default connect(mapStateToProps)(Inner);
