import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <h3>Main page</h3>
      <Link to="/users">Users</Link>
    </>
  );
};

export default MainPage;
