import React, { useState, useEffect } from "react";
import "./Login.css";
// import { useHistory } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useStateFromContext } from "../../stateProvider/StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user, cart }, dispatch] = useStateFromContext();
  const navigate = useNavigate();

  const signIn = (e) => {
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
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>By signing-in you agree to the my-shop law and rugulations</p>

        <button
          onClick={() => navigate("/signup")}
          className="login__registerButton"
        >
          No account? Create new account
        </button>
      </div>
    </div>
  );
}

export default Login;
