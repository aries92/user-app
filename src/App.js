import React, { useEffect, useState } from "react";
import "./App.css";
import UserSearch from "./components/UserSearch";
import { ADMIN_ROLES } from "./constants";

const pageUrl = "#usersearch-page";

function App() {
  const [redirected, setRedirected] = useState(false);
  const [admin, setAdmin] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setRedirected(window.location.hash === pageUrl);
    setSuccess(window.location.hash === pageUrl);
    setAdmin(window.location.hash === pageUrl ? ADMIN_ROLES.crudadmin : "");
  }, []);

  function handleChange(e) {
    setError(false);
    setSuccess(false);
    setAdmin(e.target.value);
  }

  function handleSubmit(e) {
    const isValid = ADMIN_ROLES[admin];
    e.preventDefault();
    setError(!isValid);
    setSuccess(isValid);

    if (isValid) {
      setTimeout(() => {
        location.hash = pageUrl;
        setRedirected(true);
      }, 1000);
    }
  }

  return (
    <div className="App">
      {window.location.hash !== pageUrl && (
        <form onSubmit={handleSubmit} className="form">
          <section>
            <label htmlFor="“admin-id">admin-id</label>
            <br />
            <input
              type="text"
              id="admin-id"
              name="admin-id"
              onChange={handleChange}
              value={admin}
              required
            />
            <button type="submit">login</button>
            {error && <div className="error">This admin does not exist</div>}
            {success && <div className="success">Success! Redirecting...</div>}
          </section>
        </form>
      )}
      {window.location.hash === pageUrl && redirected && success && (
        <UserSearch admin={admin} />
      )}
    </div>
  );
}

export default App;
