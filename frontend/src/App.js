import "./App.css";
import React, { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdateBlog from "./blogs/pages/UpdateBlog";
import Profile from "./user/pages/Profile";
import Blogs from "./blogs/pages/Blogs";
import CreateBlog from "./blogs/pages/CreateBlog";
import { AuthContext } from "./shared/context/auth-context";
import Auth from "./user/pages/Auth";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Blogs />
        </Route>
        <Route path="/create-blog">
          <CreateBlog />
        </Route>
        <Route path="/blogs/update/:blogId" exact>
          <UpdateBlog />
        </Route>
        <Route path="/blogs/delete/:blogId" exact></Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Blogs />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
