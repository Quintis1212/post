import "./App.css";
import React from "react";
import axios from "./axios";
import { useDispatch } from "react-redux";
import PostList from "./pages/PostList";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from "./pages/Post";
import NewPost from "./pages/NewPost";
import styled from "styled-components";

const StyledLink = styled.li`
  background-color: #ade8f4;
  font-size: 32px;
  color: white;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get("/posts").then((res) => {
      dispatch({ type: "SET_DATA", payload: res.data });
    });
  });

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <StyledUl>
              <StyledLink>
                <Link to="/home">All posts</Link>
              </StyledLink>
              <StyledLink>
                <Link to="/create-post">Create post</Link>
              </StyledLink>
            </StyledUl>
          </nav>

          <Switch>
            <Route path="/home">
              <PostList />
            </Route>
            <Route path="/productPage/:slug">
              <Post />
            </Route>
            <Route path="/create-post">
              <NewPost />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
