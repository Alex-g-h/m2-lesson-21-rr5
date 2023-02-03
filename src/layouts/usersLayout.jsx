import React from "react";
import { Redirect, useParams } from "react-router-dom";
import UserEdit from "../pages/userEdit";
import UserPage from "../pages/userPage";
import UsersPage from "../pages/usersPage";

const UsersLayout = () => {
  const { userId, param } = useParams();

  if (!userId) return <UsersPage />;

  if (!param) return <Redirect to={`/users/${userId}/profile`} />;

  if (param === "profile") return <UserPage userId={userId} />;

  if (param === "edit") return <UserEdit />;

  return <Redirect to={`/users/${userId}/profile`} />;
};

export default UsersLayout;
