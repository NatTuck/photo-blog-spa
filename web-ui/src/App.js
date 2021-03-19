
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Nav from './Nav';
import Feed from './Feed';
import UsersList from './Users/List';
import UsersNew from './Users/New';
import PostNew from './Posts/New';

function App() {
  return (
    <Container>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Feed />
        </Route>
        <Route path="/users" exact>
          <UsersList />
        </Route>
        <Route path="/users/new">
          <UsersNew />
        </Route>
        <Route path="/posts/new">
          <PostNew />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
