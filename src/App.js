import React, { lazy, Suspense } from "react";
import AppStyle from "./App_Style";

import Header from "./components/header/Header";
import FooterBar from "./components/footer/Footer";
import LinearIndeterminate from "./components/loading/Loading";
const Homepage = lazy(() => import("./homepage/Homepage"));
const BackToTop = lazy(() => import("./components/scrolltop/Scrolltop"));
const ErrorBoundary = lazy(() =>
  import("./components/error_message/Error_Boundary")
);

// const ButtonComponent = () => {
//   throw Error("error!");
// };

function App() {
  const classes = AppStyle();
  const renderLoader = () => <LinearIndeterminate />;
  return (
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
  );
}

export default App;
