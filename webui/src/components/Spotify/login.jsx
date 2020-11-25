import React, {useState, useEffect} from 'react'

const API = "http://localhost:5000/login";


export default function Login() {
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [user, setUser] = useState([]); // Auth if user havetoken or not

 useEffect(()=> {
    fetch(API)
    .then(res => res.json())
    .then(
        (result) => {
            setIsLoaded(true)
            setItems(result);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
    )
}, [])



    return(

        (user ? <Login/> : <Search/>)
    //       <button
    //   onClick={() => setCount(count + 1)}
    //       className="btn btn-primary btn-lg"
    //       type="button"
    //     >
    //   Log in to Spotify
    //     </button>
    )

}