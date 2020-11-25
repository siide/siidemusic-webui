import React from "react";
import { aboutData, AboutData } from "../services/aboutData";
import Iframe from "react-iframe";

export default function About() {
  return (
    <React.Fragment>
      <header className="header-standard">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10">
              <h1 className="text-uppercase text-white font-weight-bold">
                About me
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section className="section dark standard">
        <div className="container-fluid">
          {aboutData.map((item, index) => {
            return (
              <div key={index} className="row">
                <div className="col-lg-6 c6 cell">
                  <div className="wrapper">
                    <div className="text-content">
                      {item.title}
                      {item.infoText}
                      {/* <Iframe
                        url="https://open.spotify.com/playlist/6O2eStgX3YCmFkVSEBi9on?si=D-0K6JMTS36fUj88E9WfMQ"
                        width="450px"
                        height="450px"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                        position="relative"
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 c6 cell">
                  <div className="wrapper">
                    <div className="image-content">{item.image}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}
