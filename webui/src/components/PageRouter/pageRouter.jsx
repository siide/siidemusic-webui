import React, { Component } from "react";
import hash from "./hash";
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
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
      this.getCurrentUser(_token);
    }
  }
  getCurrentUser(token) {
    fetch(API + token)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          this.setState({
            no_data: true,
          });
          return Promise.reject();
        }

        console.log(data);
        this.setState({ no_data: false });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
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
            <Route
              path="/musiclist"
              exact
              render={() =>
                !this.state.token ? <Redirect to={API} /> : <MusicList />
              }
            />
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
