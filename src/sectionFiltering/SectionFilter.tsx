import React, { useState } from "react";

const SectionFilter = (props: any) => {
  // const [sectionFlow, setSectionFlow] = useState(props.sectionData);

  const handleChange = (e: any) => {
     props.handleSection(e,props.index)
  }

   console.log("sectionData>>>>>>", props.sectionData)

  return (
    <div className="section__item">
      <input
        type="text"
        name="sectionName"
        value={props.sectionData.sectionName}
        onChange={handleChange}
        placeholder="SECTION NAME"
      />
      <input
        type="text"
        name="marks"
        value={props.sectionData.marks}
        onChange={handleChange}
        placeholder="MARKS"
      />
      <input
        type="text"
        name="questions"
        value={props.sectionData.questions}
        onChange={handleChange}
        placeholder="QUESTIONS"
      />
    </div>
  );
};

export default SectionFilter;
