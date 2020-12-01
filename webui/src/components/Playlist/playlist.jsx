import React from 'react';
import { playlistData } from "../../services/playlistData"
import ReactPlayer from "react-player";
import { Tabs, Tab } from "react-bootstrap";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

export default function Playlist() {
   const playlistDataGet = playlistData;
    const playlistContent = playlistDataGet.map((item, index) => {
        
        <React.Fragment key={index}>
          <div className="col-lg-6 cell c6">
            <div className="wrapper">
              <div className="image-content">
                <img src="#" alt="test" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 cell c6">
            <div className="wrapper">
              <div className="text-content">
                <div className="music-top">
                  <LightSpeed left>
                    <span className="h1-responsive"> {item.user.playlists.name}</span>
                  </LightSpeed>
                  <LightSpeed right>
                    <h3>{item.user.playlists.name}</h3>
                  </LightSpeed>
                </div>
                <Tabs defaultActiveKey="album" id="uncontrolled-tab-example">
                  <Tab eventKey="album" title="Album">
                    <table>
                      <thead>
                        <Bounce top>
                          <tr>
                            <th>Title</th>
                            <th>Song Length</th>
                          </tr>
                        </Bounce>
                      </thead>
                      <tbody>
                        <Zoom top>
                          <tr>
                            <td>Werewolf</td>
                                <td>3:00</td>
                          </tr>
                        </Zoom>
                      </tbody>
                    </table>
                  </Tab>
                  <Tab eventKey="about" title="About">
                    <Bounce bottom>
                      <p>About </p>
                    </Bounce>
                  </Tab>

                  <Tab eventKey="video" title="Video">
                    <Zoom>
                      {/* {item.strVideo ? (
                          <ReactPlayer width="100%" url={item.strVideo} />
                        ) : (
                          <p>There are no videos for this album!</p>
                        )} */}
                      <ReactPlayer
                        width="100%"
                        url="https://www.youtube.com/watch?v=lufjE4orQxc&ab_channel=Siide"
                      />
                    </Zoom>
                  </Tab>
                </Tabs>
              </div>
              <div className="tab-content">
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
    })
    return (
   
      <div className="container-fluid">
        <div className="row">{playlistContent}</div>
      </div>
  );
}
