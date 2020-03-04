import React, { useEffect, useState } from "react";
import { ADMIN_ROLES } from "../constants";
import Country from "./Country";

function UserSearch({ admin }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const [sort, setSort] = useState(localStorage.getItem("sort"));

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5d7f3d17330000204ef0b027?mocky-delay=500ms")
      .then(response => response.json())
      .then(data => {
        setDefaultData(data.users);
        setData(sort ? sortData(data.users, sort) : data.users);
      });
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);
    if (e.target.value.length > 2) {
      setData(
        data.filter(user =>
          user.lastname.toLowerCase().includes(e.target.value)
        )
      );
    } else {
      setData(defaultData);
    }
  }

  function handleSortClick() {
    const sortType = sort === "asc" ? "desk" : "asc";
    localStorage.setItem("sort", sortType);
    setSort(sortType);
    setData(sortData(data, sortType));
  }

  function sortData(data, sort) {
    return data.sort((a, b) =>
      sort === "asc"
        ? a.lastname.localeCompare(b.lastname)
        : b.lastname.localeCompare(a.lastname)
    );
  }

  return (
    <div>
      <p>
        <label htmlFor="user-search">User search</label>
        <br />
        <input type="text" onChange={handleChange} value={search} />
      </p>
      {data.length > 0 && (
        <p>
          <button onClick={handleSortClick}>Sort by lastname</button>
        </p>
      )}
      <hr />
      {data.map((user, index) => (
        <div key={index}>
          <div>
            <b>Surname:</b> {user.lastname}
          </div>
          <div>
            <Country
              defaultCountry={user.country}
              disabled={admin === ADMIN_ROLES.readonlyadmin}
            />
          </div>
          <hr />
        </div>
      ))}
      {data && search.length > 2 && data.length === 0 && (
        <div>No results match criteria!</div>
      )}
    </div>
  );
}

export default UserSearch;
