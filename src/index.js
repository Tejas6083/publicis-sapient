import React from "react";
import ReactDOM from "react-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store  from "./redux/Store";
import { Provider } from "react-redux";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1024,
      lg: 1440,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
