import React, { useState } from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //  children is a special prop that gets passed to components automatically
  //     children is the content between the opening and closing tags of a UseContext which we wrapped
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
