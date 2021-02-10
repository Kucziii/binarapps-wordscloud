import React from "react";
import { observer, inject } from "mobx-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "rebass";
import { createBrowserHistory } from "history";
import routes from "./_app/routing/routes";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Home from "./components/Home/Home";

const history = createBrowserHistory();
@inject()
@observer
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Box className="page-bg">
          <HeaderBar />
          <Switch>
            <Route exact path={routes.home} component={Home} />
          </Switch>
        </Box>
      </Router>
    );
  }
}

export default App;
