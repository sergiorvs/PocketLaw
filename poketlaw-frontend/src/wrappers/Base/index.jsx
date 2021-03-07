import React, { Component } from 'react';
import LayoutView from '../Layout';
import { getAuthTokenName, isNull } from '../../utils/tools';
import { withApollo } from '@apollo/client/react/hoc';
import { GET_USER_SESSION } from '../../graphql/queries/User';

const baseStates = {
  loading: () => null,
  component: (props) => (<LayoutView {...props} />),
};

class Base extends Component {
  constructor(props) {
    super(props);

    const accessToken = localStorage.getItem(getAuthTokenName());

    this.setLoginState = this.setLoginState.bind(this);
    this.setUserSession = this.setUserSession.bind(this);
    this.getUserSession = this.getUserSession.bind(this);
    this.state = {
      globalState: true,
      render: 'loading',
      isLogin: !isNull(accessToken),
      userSession: {},
    };
  }

  setUserSession(newState) {
    this.setState({
      userSession: newState,
    });
  }

  getUserSession() {
    const {client} = this.props;

    client.query({
      query: GET_USER_SESSION,
      fetchPolicy: 'no-cache',
    })
      .then((response) => {
        const {data} = response;
        const {me = {}} = data;
        this.setUserSession(me);
      });
  }

  componentDidMount() {
    this.setState({
      render: 'component',
    });
    const {isLogin} = this.state;
    if (isLogin) {
      this.getUserSession();
    }
  }


  setLoginState(newState, postFunction) {
    if(newState) {
      this.getUserSession();
    }
    this.setState({
      isLogin: newState,
    }, postFunction);
  }

  render() {
    const {globalState, isLogin, render, userSession} = this.state;
    const componentProps = {
      globalState,
      isLogin,
      setLoginState: this.setLoginState,
      setUserSession: this.setUserSession,
      userSession,
    };

    return (baseStates[render](componentProps));
  }
}

export default withApollo(Base);
