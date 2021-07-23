import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

  const initialState = {
    credentials: {
      username: "",
      password: ""
    }
  };

const Login = (props) => {
  const { push } = useHistory();

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [state, setState] = useState(initialState)
  const [error, setError] = useState(null)

  console.log('state', state)
  const handleChange = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/login`, {
      username: state.credentials.username,
      password: state.credentials.password
    })
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        push("/colors")
      })
      .catch(() => {
        setError("incorrect username or password")
      })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Put Login Form Here</h2>
        <form onSubmit={login}>
          <label>Username </label>
          <input 
            type="text"
            name="username"
            data-testid="username"
            value={state.credentials.username}
            onChange={handleChange}
          />
          <label>Password </label>
          <input 
            type="text"
            name="password"
            data-testid="password"
            value={state.credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

// class Login extends React.Component {
//   state = {
//     credentials: {

//     }
//   }
// }

// export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.