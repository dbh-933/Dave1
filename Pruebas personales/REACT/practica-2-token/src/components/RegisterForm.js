import { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();

            const res = await fetch("http://localhost:4000/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, username, password }),
            });

            const body = await res.json();

            if (!res.ok) {
              throw new Error(body.message);
            }

            setSuccessMessage(body.message);
            setErrorMessage("");
            setEmail("");
            setUsername("");
            setPassword("");
          } catch (error) {
            console.error(error.message);
            setErrorMessage(error.message);
            setSuccessMessage("");
          }
        }}
      >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label htmlFor="username">Username:</label>
        <input
          id="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button>Register</button>
      </form>

      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </>
  );
};

export default RegisterForm;
