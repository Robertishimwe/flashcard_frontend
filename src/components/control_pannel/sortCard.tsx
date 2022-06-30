import React, { useState } from "react";

function SortCard() {
  const [sortField, setSortField] = useState("id");
  const [sortoption, setSortoption] = useState("desc");

  const handleChange = (e) => {
    setSortField(e.target.value);
  };

  const ascFucn = (e) => {
    e.preventDefault();
    setSortoption("asc");
    const sortData = {
      sortField: sortField,
      sortoption: sortoption,
    };
    localStorage.setItem("sortField", JSON.stringify(sortData));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  const descFunc = (e) => {
    e.preventDefault();
    setSortoption("desc");
    const sortData = {
      sortField: sortField,
      sortoption: sortoption,
    };
    localStorage.setItem("sortField", JSON.stringify(sortData));
    window.location.reload();
  };

  console.log(sortField);

  return (
    <div>
      <form className="sortby">
        <label>sort by:</label>
        <select
          name="field"
          id="field"
          value={sortField}
          onChange={handleChange}
        >
          <option value="id" selected>
            creaction date
          </option>
          <option value="title">title</option>
        </select>
        <button onClick={ascFucn}>asc</button>
        <button onClick={descFunc}>desc</button>
      </form>
    </div>
  );
}

export default SortCard;
