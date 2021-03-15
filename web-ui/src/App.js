import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import "./App.scss";
import Nav from "./Nav";
import Feed from "./Feed";
import Users from "./Users";

function App() {
  return (
    <Container>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Feed />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
