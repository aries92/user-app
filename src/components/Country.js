import React, { useState } from "react";

function Country({ defaultCountry, disabled }) {
  const [newCountry, setNewCountry] = useState("");
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(false);

  function handleEditClick() {
    setEdit(!edit);
  }

  function handleCountryChange(e) {
    if (e.target.value) {
      setNewCountry(e.target.value);
    }
  }

  function handleSaveClick() {
    setEdit(false);
    setSave(true);
  }

  function handleCancelClick() {
    setEdit(false);
    setSave(true);
    setNewCountry(defaultCountry);
  }

  return (
    <div>
      <b>Country:</b> {save ? newCountry : defaultCountry} {" "}
      {edit && (
        <select onChange={handleCountryChange}>
          <option value="">Select...</option>
          <option value="Germany">Germany</option>
          <option value="Russia">Russia</option>
        </select>
      )}
      {!edit && (
        <button disabled={disabled} onClick={handleEditClick}>
          Edit
        </button>
      )}
      {edit && (
        <>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      )}
    </div>
  );
}

export default Country;
