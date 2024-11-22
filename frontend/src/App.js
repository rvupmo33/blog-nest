import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdateBlog from "./shared/components/blog/UpdateBlog";  // import UpdateBlog


function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/" exact></Route>
          <Route path="/" exact></Route>
          {/* Dynamic route for updating any blog */}
          <Route path="/blogs/update/:blogId" exact component={UpdateBlog}></Route> 
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
