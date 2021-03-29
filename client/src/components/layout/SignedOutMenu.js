import React from "react";

const SignedOutMenu = () => {
  return (
    <>
      <li>
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/signup">Sign-up</a>
      </li>
    </>
  );
};

export default SignedOutMenu;
