import React, { useState } from "react";
import SectionFilter from "./SectionFilter";
import "./template.css";

const CreateTemplate = () => {
  const [input, setInput] = useState<number | any>("");

  const [sectionFlow, setSectionFlow] = useState<any>([]);

  const handleChange = (e: any) => {
    let tempArr: any = [];
    let section = Number(e.target.value);
    if (section > 100) {
      return;
    }

    if (section <= 0) {
      setInput("");
    } else {
      setInput(section);
    }

    for (let i = 0; i < e.target.value; i++) {
      tempArr = [
        ...tempArr,
        { id: i, sectionName: "", marks: null, questions: null },
      ];
    }
    setSectionFlow(tempArr);
  };


  const handleSection =(e:any , i:number)=>{
        setSectionFlow((prevState:any) => prevState.map((el:any , index:number)=> (
                    i === index ? { ...el ,
                                   [ e.target.name]:e.target.value
                                   } : el
        )))
  }

  console.log("sectionFlow>>>>",sectionFlow);
  // console.log(input);

  return (
    <div className="createTemplate">
      <input
        type="number"
        onChange={handleChange}
        value={input}
        placeholder="Enter No of Sections"
        min="1"
        max="100"
        maxLength={3}
      />

      <div className="sections">
        {sectionFlow.length !== 0 &&
          sectionFlow.map((el: any, id: number) => (
            <SectionFilter sectionData={el} index={id} handleSection={handleSection}/>
          ))}
      </div>
    </div>
  );
};

export default CreateTemplate;
