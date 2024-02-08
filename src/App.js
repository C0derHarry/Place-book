import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Users from "./user/pages/users";
import NewPlace from "./places/pages/newPlace";
import UserPlaces from "./places/pages/userPlaces";
import UpdatePlace from "./places/pages/updatePlace";
import AuthUser from "./user/pages/authUser";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userID/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/user/authentication" exact>
            <AuthUser />
          </Route>
          <Route path="/places/:placeID">
            <UpdatePlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
