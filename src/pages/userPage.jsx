import React from "react";
import { Link } from "react-router-dom";

const UserPage = ({ userId }) => {
  return (
    <div>
      <Link to="/users">Users list</Link>
      <p>
        User ID: {userId} <Link to={`/users/${userId}/edit`}>edit</Link>
      </p>
    </div>
  );
};

export default UserPage;
