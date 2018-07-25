import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { getUser } from './store';

import EnterBet from './EnterBet';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const id = location.pathname.split('?')[1];
    getUser(id);
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/enter' component={ EnterBet } />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
