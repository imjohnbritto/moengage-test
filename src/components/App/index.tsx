import React, { Suspense } from "react";
import Routes from "../Routes";
// import DrilldownsContainer from "containers/DrilldownsContainer";
import AppViewContainer from "../../containers/AppViewContainer";
import Loader from "../Loader";

const App = () => {
  return (
    <>
      <AppViewContainer>
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </AppViewContainer>
      {/* <DrilldownsContainer /> */}
    </>
  );
};

export default App