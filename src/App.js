import React, { lazy, Suspense } from "react";
import AppStyle from "./App_Style";

import Header from "./components/header/Header";
import FooterBar from "./components/footer/Footer";
import LinearIndeterminate from "./components/loading/Loading";
import ErrorBoundary from "./components/error_message/Error_Boundary";
const Homepage = lazy(() => import("./homepage/Homepage"));
const BackToTop = lazy(() => import("./components/scrolltop/Scrolltop"));

function App() {
  const classes = AppStyle();
  const renderLoader = () => <LinearIndeterminate />;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Header />
        <Suspense fallback={renderLoader}>
          <ErrorBoundary>
            <Homepage />
          </ErrorBoundary>
          <BackToTop />
          <FooterBar />
        </Suspense>
      </div>
    </React.Fragment>
  );
}

export default App;
