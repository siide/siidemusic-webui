import React from "react";
import Home from "./pages/Home";
import MusicList from "./pages/MusicList";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const pageRouterData = [
  {
    id: 1,
    pageName: <Route path="/" exact component={Home} />,
  },
  {
    id: 2,
    pageName: <Route path="/Login" exact component={Login} />,
  },
  {
    id: 3,
    pageName: <Route path="/musiclist" exact component={MusicList} />,
  },
  {
    id: 4,
    pageName: <Route path="/about" exact component={About} />,
  },
  {
    id: 5,
    pageName: <Route path="/contact" exact component={Contact} />,
  },
];
