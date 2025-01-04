import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext); //user is the value of the context defined in the UserContextProvider
  console.log(user);

  if (!user || Object.values(user).every((val) => val == null))
    return <div>Not logged in! Please Login! </div>;

  return (
    <div>
      <h1>
        Welcome {user.username} have Logged and Password is {user.password}{" "}
      </h1>
    </div>
  );
}

export default Profile;
