import { createContext, useContext, useState } from "react";

export default function UserContext() {
  const [user, setUser] = useState();

  const UserContext = createContext({});
}
