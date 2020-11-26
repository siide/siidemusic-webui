import React, { Component } from "react";
import queryString, { parse } from "query-string"
import NavBar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../../pages/Home";
import MusicList from "../../pages/MusicList";
import Login from "../../pages/Login";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

const API = "http://localhost:5000/login";

class PageRouter extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      no_data: false,
      errorMessage: null,
    };
  }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    console.log(parsed);
 }
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route
              path="/login"
              exact
              render={() =>
                this.isLoggedIn() ? <Redirect to="/login" /> : <Login />
              }
            /> */}
            {/* <Route
              path="/musiclist"
              exact
              render={() =>
                !this.state.token ? <Redirect to="/" /> : <MusicList />
              }
            /> */}
             <Route path="/musiclist" exact component={MusicList} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default PageRouter;
