import React from "react";
  import { connect } from "react-redux"; 

const withMediaQueryContainerHOC = () => (WrappedComponent: any) => {
const WithMediaQueryContainerHOC = (props: any) => {
  return <WrappedComponent {...props} />
}

const mapStateToProps = ({ messages }: any) => ({
    isDesktop: messages
  });

  return connect(mapStateToProps)(WithMediaQueryContainerHOC as any);
};

export default withMediaQueryContainerHOC as any;