import React, { useState, useRef } from 'react'
import AuthService from "../../services/authService";


const Login = ()  => {
  // const [hasError, setErrors] = useState(false);
  // const [planets, setPlanets] = useState({});

  // componentDidMount() {
  //   let parsed = queryString.parse(window.location.search);
  //   let accessToken = parsed.access_token;

  //   fetch('https://api.spotify.com/v1/me', {
  //     headers: {
  //      'Authorization': 'Bearer ' + accessToken
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       spotifyUserData:
  //       {
  //         user:
  //         {
  //           name: data.display_name
  //         }
  //       }
  //     }))
  // };

  return (
     <button onClick={()=>window.location="http://localhost:5000/api/login"} className="btn btn-primary btn-lg">
            Login to spotify
            </button>
  )
}

export default  Login;



    
