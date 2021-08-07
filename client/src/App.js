import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="links"></div>
      </div>

      <Router>
        <Route path="/" exact render={(props) => <MainPage />} />
        <Route path="/createpost" exact render={(props) => <CreatePost />} />
        <Route path="/post/:postId" exact render={(props) => <Post />} />
      </Router>
    </div>
  );
}

export default App;
