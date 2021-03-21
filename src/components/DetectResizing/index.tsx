import { PureComponent } from "react";
// import { handleWindowResize } from "actionCreators/messages_actionCreator";
import { Dispatch } from "redux";
import withMediaQueryContainerHOC from "../../containers/withMediaQueryContainer";

interface IDetectResizingProps {
  dispatch: Dispatch<any>;
  isDesktop: boolean;
}

class DetectResizing extends PureComponent<IDetectResizingProps, {}> {
  componentDidMount() {
    window.addEventListener("resize", this.checkIfDesktopView);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkIfDesktopView);
  }

  checkIfDesktopView = () => {
    const isDesktopAfterResize = window.innerWidth > 960;

    if (this.props.isDesktop !== isDesktopAfterResize) {
    //   this.props.dispatch(handleWindowResize(isDesktopAfterResize));
    }
  };

  render() {
    return null;
  }
}

export default withMediaQueryContainerHOC()(DetectResizing);
