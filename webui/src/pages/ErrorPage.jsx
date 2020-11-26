import React from "react";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

export default function ErrorPage() {
  return (
    <React.Fragment>
      <section className="section brickwall vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 cell">
              <div className="wrapper">
                <div className="text-content text-center info">
                  <Slide right>
                    <h2>Error</h2>
                  </Slide>
                  <Slide left>
                    <p>
                  (message...)
                    </p>
                  </Slide>
                  <Bounce bottom>
                    <div>
                      <a
                        href="/"
                        class="btn btn-primary btn-lg"
                        type="button"
                      >
                        Get back home
                      </a>
                    </div>
                  </Bounce>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment>
  );
}
