import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import CreatePage from "./components/CreatePage/CreatePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Accounts from "./components/Accounts/Accounts";
import ReviewPage from "./components/ReviewPage/ReviewPage";
import ContributePage from "./components/ContributePage/ContributePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="App">
          <Toolbar></Toolbar>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/create" component={CreatePage} exact />
          <Route path="/account" component={Accounts} exact />
          <Route path="/register" component={RegisterPage} exact />
          <Route path="/contribute" component={ContributePage} exact />
          <Route path="/review" component={ReviewPage} exact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
