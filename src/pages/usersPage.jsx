import React from "react";
import { Link } from "react-router-dom";
import users from "../mock/users";

const UsersPage = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>Users:</h2>
      <ul>
        {users.map((u) => {
          return (
            <li key={u.id}>
              <Link to={`/users/${u.id}`}>{u.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersPage;
