import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Tabs, Tab } from "react-bootstrap";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

//const API = "https://localhost:44309/api";
// const API = "http://localhost:56945/api";
const API = "http://localhost:5000";
let timer = null;

export default class MusicData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicData: [],
      isLoading: false,
      errorMessage: null,
    };
    this.cRef = React.createRef();
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    timer = setTimeout(
      () =>
        fetch(API + "/getMusic/3n3Ppam7vgaVa1iaRUc9Lp")
          .then(async (response) => {
            const data = await response.json();
            if (!response.ok) {
              console.log(error);

              const error = (data && data.message) || response.statusText;

              return Promise.reject(error);
            }

            console.log(data);
            this.setState({ musicData: data.musicData, isLoading: false });

            window.scrollTo({
              behavior: "smooth",
              top: this.cRef.current.offsetTop,
            });
          })
          .catch((error) => {
            this.setState({ errorMessage: error.toString(), isLoading: false });
            console.error("There was an error!", error);
          }),

      1000
    );
  }

  componentWillUnmount() {
    clearTimeout(timer);
    this.setState({ isLoading: true });
  }

  render() {
    const { isLoading, error } = this.state;
    const musicItem = this.state.musicData.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <div ref={this.cRef} className="col-lg-6 cell c6">
            <div className="wrapper">
              <div className="image-content">
                <img src={item.strDrinkThumb} alt={item.strDrink} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 cell c6">
            <div className="wrapper">
              <div className="text-content">
                <div className="music-top">
                  <LightSpeed left>
                    <span className="h1-responsive"> {item.strDrink}</span>
                  </LightSpeed>
                  <LightSpeed right>
                    <h3>{item.strCategory}</h3>
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
                            {item.strMeasure1 ? (
                              <td>{item.strMeasure1}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient1 ? (
                              <td> {item.strIngredient1} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure2 ? (
                              <td>{item.strMeasure2}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient2 ? (
                              <td> {item.strIngredient2} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure3 ? (
                              <td>{item.strMeasure3}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient3 ? (
                              <td> {item.strIngredient3} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure4 ? (
                              <td>{item.strMeasure4}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient4 ? (
                              <td> {item.strIngredient4} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure5 ? (
                              <td>{item.strMeasure5}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient5 ? (
                              <td> {item.strIngredient5} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure6 ? (
                              <td>{item.strMeasure6}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient6 ? (
                              <td> {item.strIngredient6} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure7 ? (
                              <td>{item.strMeasure7}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient7 ? (
                              <td> {item.strIngredient7} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure8 ? (
                              <td>{item.strMeasure8}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient8 ? (
                              <td> {item.strIngredient8} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure9 ? (
                              <td>{item.strMeasure9}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient9 ? (
                              <td> {item.strIngredient9} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure10 ? (
                              <td>{item.strMeasure10}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient10 ? (
                              <td> {item.strIngredient10} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure11 ? (
                              <td>{item.strMeasure11}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient11 ? (
                              <td> {item.strIngredient11} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure12 ? (
                              <td>{item.strMeasure12}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient12 ? (
                              <td> {item.strIngredient12} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure13 ? (
                              <td>{item.strMeasure13}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient13 ? (
                              <td> {item.strIngredient13} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure14 ? (
                              <td>{item.strMeasure14}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient14 ? (
                              <td> {item.strIngredient14} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                          <tr>
                            {item.strMeasure15 ? (
                              <td>{item.strMeasure15}</td>
                            ) : (
                              ""
                            )}
                            {item.strIngredient15 ? (
                              <td> {item.strIngredient15} </td>
                            ) : (
                              ""
                            )}
                          </tr>
                        </Zoom>
                      </tbody>
                    </table>

                    {/* <ul>
                      <li>{item.strIngredient1} </li>
                      <li>{item.strIngredient2} </li>
                      <li>{item.strIngredient3} </li>
                      <li>{item.strIngredient4} </li>
                      <li>{item.strIngredient5} </li>
                      <li>{item.strIngredient6} </li>
                      <li>{item.strIngredient7} </li>
                      <li>{item.strIngredient8} </li>
                      <li>{item.strIngredient9} </li>
                      <li>{item.strIngredient10} </li>
                      <li>{item.strIngredient11} </li>
                      <li>{item.strIngredient12} </li>
                      <li>{item.strIngredient13} </li>
                      <li>{item.strIngredient14} </li>
                      <li>{item.strIngredient15} </li>
                    </ul> */}
                  </Tab>
                  <Tab eventKey="about" title="About">
                    <Bounce bottom>
                      <p>{item.strInstructions}</p>
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
      );
    });
    if (error) {
      return (
        <div className="col-lg-12">
          <div className="wrapper">
            <div className="text-content">
              <h2>{error.message}</h2>
            </div>
          </div>
        </div>
      );
    }
    if (isLoading) {
      return (
        <div className="loader-wrapper">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <div className="container-fluid">
        <div className="row">{musicItem}</div>
      </div>
    );
  }
}
