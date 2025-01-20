import "./App.css";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import routes from "virtual:generated-pages-react";

const Routes = () => {
  return useRoutes(routes);
};

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
