import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    // You'll update this function later
  };

  return (
    <div id="main">
      <div className="mainContainer">
        <div className="titleContainer">
          <div>Welcome!</div>
        </div>
        <div>This is the home page.</div>
        <div className="buttonContainer">
          <input
            className="inputButton"
            type="button"
            onClick={onButtonClick}
            value={loggedIn ? 'Log out' : 'Log in'}
          />
          {loggedIn ? <div>Your email address is {email}</div> : <div />}
        </div>
      </div>
    </div>
  );
};
