import React from 'react';
import ApplicationLayout from "./components/ApplicationLayout";
import ApplicationContextProvider from "./context/context";


function App() {
  return (
    <ApplicationContextProvider>
      <ApplicationLayout/>
    </ApplicationContextProvider>
  );
}

export default App;
