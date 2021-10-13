import React, { useState } from "react";
import "./Filter.css";

const Filter = () => {
  const [inputs, setInputs] = useState({
    status: "Published",
    marks: "",
    difficulty: "",
    tags: "",
    quesType: "",
  });

  const [showFilterOptipns, setFilterOptions] = useState(false);

  const handleChange = (e: any) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilterAdd = () => {
    setFilterOptions((prevState) => !prevState);
  };
  console.log("inputs>>", inputs);
  //   console.log("inputs>>", filters);

  return (
    <div className="filter">
      <div className="filter__inputs">
        {inputs.status && <h1>{inputs.status}</h1>}
        {inputs.difficulty && (
          <h1>
            {inputs.difficulty}{" "}
            <span onClick={() => setInputs({ ...inputs, difficulty: "" })}>
              X
            </span>
          </h1>
        )}
        {inputs.quesType && (
          <h1>
            {inputs.quesType}{" "}
            <span onClick={() => setInputs({ ...inputs, quesType: "" })}>
              X
            </span>
          </h1>
        )}
        {inputs.tags && (
          <h1>
            {inputs.tags}{" "}
            <span onClick={() => setInputs({ ...inputs, tags: "" })}>X</span>
          </h1>
        )}
        {inputs.marks && (
          <h1>
            {inputs.marks}{" "}
            <span onClick={() => setInputs({ ...inputs, marks: "" })}>X</span>
          </h1>
        )}
      </div>

      <div className="filter__btn" onClick={handleFilterAdd}>
        Filter +{" "}
      </div>

      {showFilterOptipns && (
        <div className="section__filter">
            <h1 onClick={()=> setFilterOptions(false)}>X</h1>
          <select value={inputs.status} name="status" onChange={handleChange}>
            <option value="" disabled selected>
              Select Status
            </option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>

          <select
            value={inputs.difficulty}
            name="difficulty"
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Select Difficulty
            </option>
            <option value="HIGH">HIGH</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="LOW">LOW</option>
          </select>

          <select value={inputs.tags} name="tags" onChange={handleChange}>
            <option value="" disabled selected>
              Select Tags
            </option>
            <option value="hyd">Hyd</option>
            <option value="pune">Pune</option>
            <option value="bng">Banglore</option>
          </select>

          <select
            value={inputs.quesType}
            name="quesType"
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Select QUESTION TYPE
            </option>
            <option value="ppt">MS PPT</option>
            <option value="excel">MS EXCEL</option>
            <option value="sheet">MS SHEET</option>
          </select>

          <input
            type="text"
            value={inputs.marks}
            name="marks"
            onChange={handleChange}
            placeholder="Enter Marks"
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
