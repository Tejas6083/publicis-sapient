import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import AppStyle from "./App_Style";
import fetchPosts from "./redux/spaceX/Fetch";

import Header from "./components/header/Header";
import FooterBar from "./components/footer/Footer";
import LinearIndeterminate from "./components/loading/Loading";
const ErrorBoundary = lazy(()=> import("./components/error_message/Error_Boundary"));
const Homepage = lazy(() => import("./homepage/Homepage"));
const BackToTop = lazy(() => import("./components/scrolltop/Scrolltop"));

const App = ({getEvents}) => {
  const classes = AppStyle();
  useEffect(() => {
    async function foo() {
      await getEvents("");
    }
    foo();
  }, [getEvents]);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Header />
        <Suspense fallback={<LinearIndeterminate />} >
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

const mapDispatchToProps = {
  getEvents: fetchPosts,
};

export default connect(null, mapDispatchToProps)(App);
