import React from "react";
import withMediaQueryContainer from "../../../containers/withMediaQueryContainer/";
import Header from '../../Header';

const AppView: React.FunctionComponent<any> = (props) => {

  const renderChildren = () => {
    return React.Children.map(props.children, (child: any) => {
      return React.cloneElement(child, {});
    });
  };

  return (
    <div className="App">
      <Header />
      {renderChildren()}
    </div>
  );
}

export default withMediaQueryContainer()(AppView);