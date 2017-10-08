import React, { Component } from "react";
import PropTypes from "prop-types";

export class Provider extends Component {
  constructor(props) {
    super();
    this.state = props.store;
  }

  componentDidMount() {
    this.state.subscribe(this.updateState.bind(this));
  }

  updateState() {
    this.forceUpdate();
  }

  getChildContext() {
    return { store: this.state };
  }

  render() {
    return this.props.children;
  }
}

Provider.propTypes = {
  store: PropTypes.object.isRequired
};

Provider.childContextTypes = {
  store: PropTypes.object
};

const getDispatchedActions = (actions, dispatch) => {
  let res = {};
  for (let i in actions) {
    res[i] = () => dispatch(actions[i]());
  }
  return res;
};

export const connect = (mapStateToProps = () => {}, mapActionsToProps = {}) => {
  return ComposedComponent => {
    class ConnectedClass extends Component {
      render() {
        const { store } = this.context;
        const { getState, dispatch } = store;
        dispatch({
          type: "SET_WHITE"
        });
        return (
          <ComposedComponent
            {...mapStateToProps(getState())}
            {...getDispatchedActions(mapActionsToProps, dispatch)}
            dispatch={dispatch}
          />
        );
      }
    }

    ConnectedClass.contextTypes = {
      store: PropTypes.object
    };

    return ConnectedClass;
  };
};
