import React from "react";
import { connect } from "react-redux";
import AppView from "../../components/App/AppView";

const AppViewContainer: React.FunctionComponent<any> = (props) => {

    const renderChildren = () => {
        return React.Children.map(props.children, (child: any) => {
            return React.cloneElement(child, {});
        });
    };

    const getAppConfig = () => {
        return {
            ACTIVE: {
            }
          };
    }

    return (<AppView APP_CONFIG={getAppConfig()}>{renderChildren()}</AppView>)
}

const mapStateToProps = ({ APP_CONFIG, messages }: any) => ({
    APP_CONFIG
  });
  

export default connect(mapStateToProps)(AppViewContainer);