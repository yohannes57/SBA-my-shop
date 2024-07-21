import React, { useState } from "react";
import "./Login.css";
// import { useHistory } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useStateFromContext } from "../../stateProvider/StateProvider";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [{ user, cart }, dispatch] = useStateFromContext();
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    dispatch({ type: "add_user", user: email });
    navigate("/");
  };

  return (
    <div className="login">
      <Link to="/">
        <img src="" alt="" className="login__logo" />
      </Link>
      <div className="login__container">
        <form>
          <h5>user-name</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signup}
            className="login__signInButton"
            required
          >
            Sign up
          </button>
        </form>
        <button
          onClick={() => navigate("/login")}
          className="login__registerButton"
        >
          Have account? Login
        </button>
      </div>
    </div>
  );
}

export default Signup;
