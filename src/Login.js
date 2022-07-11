import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {

  const [{}, dispatch] = useStateValue();


  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login_text">
          <h2>Sign in to Whatsapp</h2>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
