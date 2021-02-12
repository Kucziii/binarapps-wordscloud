import React from "react";
import { Router, Switch, Route } from "react-router";
import { Box } from "rebass";
import { createBrowserHistory } from "history";
import routes from "./_app/routing/routes";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";
import Result from "./components/Result/Result";

const history = createBrowserHistory();
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Box className="page-bg">
          <HeaderBar history={history} />
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.game} component={Game} />
            <Route path={routes.result} component={Result} />
          </Switch>
        </Box>
      </Router>
    );
  }
}

export default App;
