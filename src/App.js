import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { getUser } from './store';

import EnterBet from './EnterBet';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    MessengerExtensions.askPermission(
      function(permission_response) {
        // Person grants or rejects the asked permission.
        let permissions = permission_response.permissions; // list of all permissions granted
        let isGranted = permission_response.isGranted;

        if (isGranted) {
          // User has granted user_profile permission
        }

      }, function(errorCode, errorMessage) {
        // Error occurred
      },
      "user_profile"
    );
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
