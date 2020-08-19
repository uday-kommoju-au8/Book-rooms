import React, { Component } from "react"
import "../styles/Register.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {Link} from "react-router-dom"

firebase.initializeApp({
  apiKey: "AIzaSyBZ8BRLIsFPleNI3Aye6o8DCKaoHFDNbyQ",
  authDomain: "login-e2fc2.firebaseapp.com"
})

class Login extends Component {
  
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
     
      <div className="App">
        {this.state.isSignedIn ? (
          <span className="container3">
            <h4 className="back">Signed In Succesfully!</h4>
            
            <h1 className="back">Welcome {firebase.auth().currentUser.displayName}</h1>

            <img
              alt="profile"
              src={firebase.auth().currentUser.photoURL} className="profile"
            />
            <Link to="/rooms" className="btn1">
            go to Rooms
          </Link>
          <br/>
          <button onClick={() => firebase.auth().signOut()} >Sign out!</button>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
      
    )
  }
}

export default Login

// import React from "react";
// import {GoogleLogin} from "react-google-login";
// import config from "../config";

// const LoginPage = () =>{
//     const responseGoogle = respone =>{
//         console.log(respone);
//     }
//     return  (
//         <div>
//             <GoogleLogin
//                clientId ={config.CLIENT_ID}
//                buttonText= "Login"
//                onSuccess = {responseGoogle}
//                onFailure = {responseGoogle}
//                scope = ""
//                cookiePolicy = {"single_host_origin"}
//             />
//         </div>
//     )
// }
// export default LoginPage;

// import React, { useState } from "react";
// import axios from "axios";
// import { setUserSession } from "../Utils/Common";

// function Login(props) {
//   const [loading, setLoading] = useState(false);
//   const username = useFormInput("");
//   const password = useFormInput("");
//   const [error, setError] = useState(null);

//   // handle button click of login form
//   const handleLogin = () => {
//     setError(null);
//     setLoading(true);
//     axios
//       .post("http://localhost:3000/users/signin", {
//         username: username.value,
//         password: password.value,
//       })
//       .then((response) => {
//         setLoading(false);
//         setUserSession(response.data.token, response.data.user);
//         props.history.push("/profile");
//       })
//       .catch((error) => {
//         setLoading(false);
//         if (error.response.status === 401)
//           setError(error.response.data.message);
//         else setError("Something went wrong. Please try again later.");
//       });
//   };

//   return (
//     <div>
//       Login
//       <br />
//       <br />
//       <div>
//         Username
//         <br />
//         <input type="text" {...username} />
//       </div>
//       <div style={{ marginTop: 10 }}>
//         Password
//         <br />
//         <input type="password" {...password} />
//       </div>
//       {error && (
//         <>
//           <small style={{ color: "red" }}>{error}</small>
//           <br />
//         </>
//       )}
//       <br />
//       <input
//         type="button"
//         value={loading ? "Loading..." : "Login"}
//         onClick={handleLogin}
//         disabled={loading}
//       />
//       <br />
//     </div>
//   );
// }

// const useFormInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
//   return {
//     value,
//     onChange: handleChange,
//   };
// };

// export default Login;
