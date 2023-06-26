import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/dashboard" /> : <Home />}
        </Route>
        <Route exact path="/dashboard">
          {user ? <Dashboard /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/home">
          {user ? <Dashboard /> : <Redirect to="/" />}
        </Route>
        <Route  exact path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/login">{!user ? <Login /> : <Redirect to="/dashboard" />}</Route>
        {user && (
          <>
            <Route exact path="/movies">
              <Dashboard type="movie" />
            </Route>
            <Route exact path="/series">
              <Dashboard type="series" />
            </Route>
            <Route exact path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
