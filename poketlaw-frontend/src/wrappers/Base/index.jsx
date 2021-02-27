import React, { Component } from 'react';
import LayoutView from '../Layout';
import {
  getAuthTokenName,
  isNull
} from '../../utils/tools';

const baseStates = {
  loading: () => null,
  component: (props) => (<LayoutView {...props} />),
};

class Base extends Component {
  constructor(props) {
    super(props);

    const accessToken = localStorage.getItem(getAuthTokenName());

    this.setLoginState = this.setLoginState.bind(this);
    this.state = {
      globalState: true,
      render: 'loading',
      isLogin: !isNull(accessToken),
    };
  }

  componentDidMount() {
    this.setState({
      render: 'component',
    });
  }

  setLoginState(newState, postFunction) {
    this.setState({
      isLogin: newState,
    }, postFunction);
  }

  render() {
    const { globalState, isLogin, render } = this.state;
    const componentProps = {
      globalState,
      isLogin,
      setLoginState: this.setLoginState,
    };

    return (baseStates[render](componentProps));
  }
}

export default Base;
