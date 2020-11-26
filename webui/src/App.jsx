import React, { Component }from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import queryString, { parse } from "query-string"
import NavBar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import MusicList from "./pages/MusicList";
import About from "./pages/About";
import Contact from "./pages/Contact";

let spotifyUserData = {
  user: {
    name: "",
    link: "",
    image: [
      {
        height: null,
        url: "",
        width: null
      }
    ]
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      spotifyUserData: {},
      filterString: ''
    };
  }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    fetch('https://api.spotify.com/v1/me', {
      headers: {
       'Authorization': 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(data => this.setState({
        spotifyUserData:
        {
          user:
          {
            name: data.display_name
          }
        }
      }))

 }
  render() {
    let getUserData = this.state.spotifyUserData.user ? this.state.spotifyUserData.user.name : "tomt";
console.log("Här är datan " + getUserData)
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
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
