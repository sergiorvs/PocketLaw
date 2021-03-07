import React from 'react';
import { Redirect, Route, } from 'react-router-dom';
import PropTypes from 'prop-types';
import routesDictionary from './routesDict';
import SiderWrapper from '../wrappers/SiderWrapper';


const routeTypes = {
  public: (props) => {
    const {
      renderProps, component: Component,
      isLogin, setLoginState,
    } = props;
    if (isLogin) {
      return (
        <Redirect
          to={routesDictionary.dashboard}
        />
      );
    }

    return <Component setLoginState={setLoginState} {...renderProps} />;
  },
  private: (props) => {
    const {
      renderProps,
      component: Component,
      setLoginState,
      isLogin,
      userSession,
      setUserSession,
    } = props;

    if (!isLogin) {
      return (
        <Redirect
          to={routesDictionary.login}
        />
      );
    }

    return (
      <SiderWrapper setLoginState={setLoginState} isLogin={isLogin} userSession={userSession}
                    setUserSession={setUserSession}>
        <Component setLoginState={setLoginState} {...renderProps} />
      </SiderWrapper>
    );
  },
  persistent: (props) => {
    const {
      renderProps, component: Component, isLogin,
      setLoginState, setUserSession, userSession
    } = props;

    return (
      <SiderWrapper setLoginState={setLoginState} isLogin={isLogin} userSession={userSession}
                    setUserSession={setUserSession}>
        <Component setLoginState={setLoginState} {...renderProps} />
      </SiderWrapper>
    );
  },
};

function MakeRouteWithSubRoutes(props) {
  const {
    path, exact, title,
    component: Component, type,
    isLogin, setLoginState, userSession,
    setUserSession,
  } = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(renderProps) => {
        const propsComponent = {
          ...renderProps,
        };
        document.title = title;

        return (
          routeTypes[type]({
            renderProps: propsComponent,
            setLoginState,
            component: Component,
            isLogin,
            userSession,
            setUserSession,
          })
        );
      }}
    />
  );
}

MakeRouteWithSubRoutes.propTypes = {
  /**
   * The route path
   */
  path: PropTypes.string.isRequired,
  /**
   * Component to be rendered
   */
  component: PropTypes.elementType.isRequired,
  /**
   * If path will be an exact match
   */
  exact: PropTypes.bool,
  /**
   * Path type private, public, persistent
   */
  type: PropTypes.string,
  /**
   * If user is Logged
   */
  isLogin: PropTypes.bool,
  /**
   * Function to change application state to login
   */
  setLoginState: PropTypes.func.isRequired,
  /**
   * Tab Title
   */
  title: PropTypes.string.isRequired,
};

MakeRouteWithSubRoutes.defaultProps = {
  exact: false,
  type: 'private',
  isLogin: false,
  profileHeader: false,
};

export default MakeRouteWithSubRoutes;
