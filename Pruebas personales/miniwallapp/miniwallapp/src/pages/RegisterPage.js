import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <section>
      <h2>Register form</h2>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const NewUser = { name, email, password };
          const rest = await fetch("http://localhost:4000/register", {
            method: "POST",
            headres: { "Content-Type": "application/json" },
            body: JSON.stringify(NewUser),
          });
          const body = await rest.json();
        }}
      >
        <label htmlFor="username">Name:</label>
        <input
          id="username"
          value={name}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
      </form>
    </section>
  );
};

export default RegisterPage;
