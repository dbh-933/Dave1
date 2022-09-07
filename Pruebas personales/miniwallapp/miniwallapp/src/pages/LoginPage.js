import { useState, useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section>
      <h2>Login</h2>

      <form>
        <label htmlFor="email">Email:</label>
        <input>
          id="email" type="email" value={email}
          onChange=
          {(event) => {
            setEmail(event.target.value);
          }}
        </input>
        <label htmlFor="password">Password:</label>
        <input>
          id="password" value={password}
          onChange=
          {(event) => {
            setPassword(event.target.value);
          }}
        </input>
      </form>
    </section>
  );
};

export default Loginpage;
