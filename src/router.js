import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/header/header.component";
import Login from "./components/auth/login/login.component";
import Landing from "./components/landing/landing.component";
import Menu from "./components/menu/menu.component";
import Favourites from "./components/favourites/favourites.component";
import Details from "./components/details/details.component";
import Register from "./components/register/register.component";


const PrivateRoute = ({ component: Component, user }) => (
  <Route
    render={(props) =>
      user ? (
        <Component {...props} user={user} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);

const AppRoute = ({ component: Component, ...props }) => {
  return <Route render={() => <Component {...props} />} />;
};

function Routes(props) {
  const {
    user,
    signInWithGoogle,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
  } = props;

  return (
    <Router>
      <Header user={user} />
      <Switch>
        <AppRoute path={"/menu"} exact component={Menu} user={user} />
        <AppRoute path={"/favourites"} exact component={Favourites} />
        <AppRoute path={"/details"} exact component={Details} />
        <AppRoute
          path={"/register"}
          createUserWithEmailAndPassword={createUserWithEmailAndPassword}
          exact
          component={Register}
        />
        <AppRoute
          path={"/login"}
          exact
          component={Login}
          signInWithGoogle={signInWithGoogle}
          signInWithEmail={signInWithEmailAndPassword}
          signOut={signOut}
          user={user}
        />
        <AppRoute path={"/"} exact component={Landing} />
        <PrivateRoute
          path={"/app"}
          exact
          component={({ user }) => {
            return user.displayName;
          }}
          user={user}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
