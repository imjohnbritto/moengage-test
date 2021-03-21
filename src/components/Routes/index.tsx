import React, { ReactNode } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { IRoute } from "./index.types";
import Error from "../Error";
// import { SvgIconType } from "components/shared/SvgIcon/index.types";
import useRoutesConfig from "../../hooks/useRoutesConfig";

const Routes: React.FC<{}> = () => {
  const ROUTES_CONFIG = useRoutesConfig();

  // todo typing
  const createRouteComponent = (pathname: string, component: ReactNode) => {
    return <Route key={pathname} exact={true} path={pathname} render={() => component} />;
  };

  const renderMainRoutes = (): ReactNode[] => {
    return ROUTES_CONFIG.filter(({ component }: IRoute | any) => component).map(({ pathname, component }: any) => {
      if (component) {
        return createRouteComponent(pathname, component);
      }
    });
  };

  return (
    <Switch>
      {renderMainRoutes()}
      <Route
        render={({ history }: any) => {
          return (
            <Error
              isError={true}
              msgTitle="Page not found"
            //   svgType={SvgIconType.ERROR_NOT_FOUND}
              btnLabel="Back"
            />
          );
        }}
      />
    </Switch>
  );
};

export default Routes;
