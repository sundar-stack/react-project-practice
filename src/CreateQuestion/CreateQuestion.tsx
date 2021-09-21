import React, { useRef, useState, ChangeEvent } from "react";

interface state {
  questions: {
    id: number;
    name: string;
  }[];
}

const CreateQuestion = () => {
  //   const [questions, setQuestions] = useState([]);
  const [fields, setFields] = useState([{ value: "", password: "", id: null }]);
  const ref = useRef<any>();

  const [sundar, setSundar] = useState({ value: "", password: "", id: null});

  const addQuestion = () => {
    let values = [...fields];
    values = [...values, { value: "", password: "", id: null }];
    setFields(values);
  };

  function handleChange(i: any, event: ChangeEvent<HTMLInputElement>) {
    let values: any = [...fields];
    console.log(values[i].password);

    values[i].id = i;

    console.log(event.target.value, event.target.name);

    if (event.target.name === "password") {
      values[i].password = event.target.value;
    } else if (event.target.name === "value") {
      values[i].value = event.target.value;
    }

    console.log("values", values);

    setFields(values);
  }

  const handleDel = (id: any) => {
    console.log(id);

    const question = fields.filter((item: any) => item.id !== id);
    console.log(question);
    setFields(question);
  };

  const clear = (id: any) => {
    console.log(id);
    let newfields = [...fields];

    const index = newfields.findIndex((item: any) => item.id === id);
    newfields[index] = { value: "", password: "", id: id };

    setFields(newfields);
  };

  console.log(fields);

  const handleSmooth = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setSundar((prevState):any => {
        console.log(prevState);
        return { value: "heyyy man", password: "hello man", id: null}
        
    });
  };

  console.log(sundar);
  

  return (
    <div>
      {/* <button onClick={editQuestion}>Edit</button>
      <button onClick={delQuestion}>Delete</button> */}

      {fields.map((question: any, index: number) => (
        <>
          <input
            type="text"
            placeholder="Enter text"
            onChange={(e) => handleChange(index, e)}
            value={question.value}
            name="value"
            // id="value"
          />
          <input
            type="text"
            placeholder="Enter password"
            onChange={(e) => handleChange(index, e)}
            value={question.password}
            name="password"
            // id="password"
          />

          {index > 0 && (
            <button onClick={() => handleDel(index)}>Delete</button>
          )}
          <button onClick={() => clear(index)}>Clear</button>
        </>
      ))}

      <button onClick={addQuestion}>Add</button>

      <button onClick={handleSmooth}>Go</button>

      <div style={{ background: "blue", height: "100vh", width: "100%" }}>
        entry
      </div>

      <div style={{ background: "red", height: "100vh", width: "100%" }}>
        middle
      </div>

      <div
        ref={ref}
        style={{ background: "yellow", height: "100vh", width: "100%" }}
      >
        exit
      </div>
    </div>
  );
};

export default CreateQuestion;
