import React from "react";
import Portfolio from "../components/Portfolio/portfolio";
import Feed from "../components/Feed/feed";
import Header from "../components/Header/header";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Playlist from "../components/Playlist/playlist"

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Playlist/>
      <section className="section">
        <div className="container-fluid">
          <div className="row">
            <Portfolio />
          </div>
        </div>
      </section>
      <section className="section brickwall expand">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 cell">
              <div className="wrapper">
                <div className="text-content text-center info">
                  <Slide right>
                    <h2>My story!</h2>
                  </Slide>
                  <Slide left>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </Slide>
                  <Bounce bottom>
                    <div>
                      <a
                        href="/about"
                        class="btn btn-primary btn-lg"
                        type="button"
                      >
                        Read more
                      </a>
                    </div>
                  </Bounce>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 cell">
              <div className="wrapper">
                <div className="text-content text-center info">
                  <Slide right>
                    <h2>Check in your music!</h2>
                  </Slide>
                  <Slide left>
                    <p>A new feature is on it's way, lorem ipsum!</p>
                  </Slide>
                </div>
              </div>
            </div>
            <div className="col-lg-6 cell">
              <div className="wrapper">
                <div className="image-content">
                  <img src="/images/portfolio/djset2.jpg" alt="dj-mix" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<section className="section">
        <div className="container-fluid">
          <div className="row">
            <Feed />
          </div>
        </div>
      </section> */}
    </React.Fragment>
  );
}
