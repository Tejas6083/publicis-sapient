import React from "react";
import ErrorBoundary from "./error_message/Error_Boundary";
import Header from "./header/Header";
import Homepage from "./homepage/Homepage";

// const ButtonComponent = () => {
//   throw Error("error!");
// };

function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <Homepage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
