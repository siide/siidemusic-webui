import React, { useState, useRef } from 'react'
import AuthService from "../../services/authService";


export default function Login(props) {

// const btnSubmit = useRef();

// const [loading, setLoading] = useState(false);
// const [message, setMessage] = useState("");

// const handleLogin = (e) => {
//     e.preventDefault();

//     console.log("Active");
//     // setMessage("");
//     setLoading(true);

//     // btnSubmit.current.validateAll();

    
//       AuthService.login().then(
//         () => {
//           props.history.push();
//           window.location.reload();
//         },
//         (error) => {
//           const resMessage =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();

//           setLoading(false);
//           setMessage(resMessage);
//         }
//       );
    
// //    if (btnSubmit.current.context._errors.length === 0) {
// //       AuthService.login().then(
// //         () => {
// //           props.history.push("/login");
// //           window.location.reload();
// //         },
// //         (error) => {
// //           const resMessage =
// //             (error.response &&
// //               error.response.data &&
// //               error.response.data.message) ||
// //             error.message ||
// //             error.toString();

// //           setLoading(false);
// //           setMessage(resMessage);
// //         }
// //       );
// //     } else {
// //       setLoading(false);
// //     }
   
//   };


    return (
      <button onClick={()=>window.location="http://localhost:5000/api/login"} className="btn btn-primary btn-lg">
            Login to spotify
            </button>
            // <button onClick={handleLogin} ref={btnSubmit} className="btn btn-primary btn-lg" disabled={loading}>
            //   {loading && (
            //     <span className="spinner-border spinner-border-sm"></span>
            //   )}
            //   <span>Login to spotify</span>
            // </button>
    )

}