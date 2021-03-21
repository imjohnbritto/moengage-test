import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export interface PersistedRouteRedirectorContainerProps {
  redirectTo: (persistedPathname: string) => void;
  pathname: string;
  persistedRoute: string;
  dispatch?: Dispatch<any>;
}

export interface IStoreState {
    APP_CONFIG: any;
    filters: any;
  }

const mapStateToProps = ({ APP_CONFIG }: IStoreState) => {
  return {
    persistedRoute: APP_CONFIG.ACTIVE.ROUTE
  };
};

@(connect(mapStateToProps) as any)
class PersistedRouteRedirectorContainer extends Component<PersistedRouteRedirectorContainerProps, {}> {
  static defaultProps = {
    persistedRoute: ""
  };

  componentWillMount() {
    const { redirectTo, pathname, persistedRoute } = this.props;

    if (pathname !== persistedRoute) {
      redirectTo(persistedRoute);
    }
  }

  render() {
    return null;
  }
}

export default React.memo(PersistedRouteRedirectorContainer);
