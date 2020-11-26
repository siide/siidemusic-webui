// import axios from "axios";
// const API_URL = "http://localhost:5000/api/";

// const login = () => {
//   console.log("login active")
//   return axios
//     .post(API_URL + "login")
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
// };

// const logout = () => {
//   localStorage.removeItem("user");
// };

// const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem("user"));
// };

// export default {
//   login,
//   logout,
//   getCurrentUser,
// };