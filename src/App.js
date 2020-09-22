import React from "react";
import ErrorBoundary from "./components/error_message/Error_Boundary";
import Header from "./components/header/Header";
import Homepage from "./homepage/Homepage";
import FooterBar from "./components/footer/Footer";
import AppStyle from "./App_Style";
import BackToTop from "./components/scrolltop/Scrolltop";

// const ButtonComponent = () => {
//   throw Error("error!");
// };

function App() {
  const classes = AppStyle();
  return (
    <div className={classes.root}>
      <Header />
      <ErrorBoundary>
        <Homepage />
      </ErrorBoundary>
      <BackToTop />
      <FooterBar />
    </div>
  );
}

export default App;
