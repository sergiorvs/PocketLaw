import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import routesDictionary from './routesDict';
import SiderWrapper from "../wrappers/SiderWrapper";


const routeTypes = {
  public: (props) => {
    const {
      renderProps, component: Component,
      isLogin, setLoginState,
    } = props;
    if(isLogin) {
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
    } = props;

    if(!isLogin) {
      return (
        <Redirect
          to={routesDictionary.login}
        />
      );
    }

    return (
    <SiderWrapper setLoginState={setLoginState}>
      <Component setLoginState={setLoginState} {...renderProps} />
    </SiderWrapper>
    );
  },
  persistent: (props) => {
    const {
      renderProps, component: Component,
      setLoginState,
    } = props;

    return (
      <SiderWrapper setLoginState={setLoginState}>
        <Component setLoginState={setLoginState} {...renderProps} />
      </SiderWrapper>
    );
  },
};

function MakeRouteWithSubRoutes(props) {
  const {
    path, exact, title,
    component: Component, type,
    isLogin, setLoginState,
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
