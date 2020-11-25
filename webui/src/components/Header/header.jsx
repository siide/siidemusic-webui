import React, { useState, Component } from "react";
import Music from "../Music/music";
import Login from "../Spotify/login"
import Slider from "../Slider/slider";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkData: [],
      isLoading: false,
      errorMessage: null,
    };
  }

  render() {
    return (
         <React.Fragment>
        <Slider />
        <section className="header-top">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10">
                <LightSpeed right>
                  <h1 className="text-uppercase text-white font-weight-bold">
                    Welcome to Siide Music!
                  </h1>
                </LightSpeed>
                <Bounce top>
                  <h2>Don't know what to listen to?</h2>
                </Bounce>
                <Zoom bottom>
                  <div>
                    <Login/>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </section>
   
      </React.Fragment>
    );
  }
}
