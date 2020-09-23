import React, { lazy, Suspense } from "react";
import AppStyle from "./App_Style";

import Header from "./components/header/Header";
import FooterBar from "./components/footer/Footer";
import LinearIndeterminate from "./components/loading/Loading";
const ErrorBoundary = lazy(() =>
  import("./components/error_message/Error_Boundary")
);
const Homepage = lazy(() => import("./homepage/Homepage"));
const BackToTop = lazy(() => import("./components/scrolltop/Scrolltop"));

const App = () => {
  const classes = AppStyle();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Header />
        <Suspense fallback={<LinearIndeterminate />}>
          <ErrorBoundary>
            <Homepage />
          </ErrorBoundary>
          <BackToTop />
          <FooterBar />
        </Suspense>
      </div>
    </React.Fragment>
  );
};

export default App;
