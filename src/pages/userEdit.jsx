import React from "react";
import { Link, useParams } from "react-router-dom";
import { usersCount } from "../mock/users";

const UserEdit = () => {
  const { userId } = useParams();
  const anotherUserId = ((Number(userId) + 1) % usersCount).toString();

  return (
    <div>
      <Link to="/users">Users list</Link>
      <br />
      <Link to={`/users/${userId}`}>User page</Link>
      <br />
      <Link to={`/users/${anotherUserId}`}>Another user page</Link>
      <h3>User edit</h3>
    </div>
  );
};

export default UserEdit;
