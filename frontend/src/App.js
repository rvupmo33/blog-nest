import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdateBlog from "./shared/components/blog/UpdateBlog";
import DeleteBlog from "./shared/components/blog/DeleteBlog";
import Profile from "./shared/components/user/Profile";
import Blogs from "./blog/pages/Blogs";
import CreateBlog from "./shared/components/blog/CreateBlog";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Blogs />
          </Route>
          <Route path="/" exact></Route>
          <Route path="/" exact></Route>
          <Route
            path="/blogs/update/:blogId"
            exact
            component={UpdateBlog}
          ></Route>
          <Route
            path="/blogs/delete/:blogId"
            exact
            component={DeleteBlog}
          ></Route>
          <Route path="/" exact>
            <Blogs />
          </Route>
          <Route path="/create-blog" exact>
            <CreateBlog />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
