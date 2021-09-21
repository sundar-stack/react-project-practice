import React from "react";
import "./App.css";
import AntdLayout from "./components/ANTD/AntdLayout";
import "antd/dist/antd.css";
import Dashboard from "./components/ANTD/Dashboard";
import CreateQuestion from "./CreateQuestion/CreateQuestion";
import QuesSteps from "./CreateQuestion/QuesSteps/QuesSteps";

import CreateTemplate from "./sectionFiltering/CreateTemplate";

export enum languages {
  en = "English",
  chi = "China",
  ger = "Germany",
}

// const dum ={
//     en : "English",
//     chi : "China",
//     ger : "Germany",
// }

////understanding switch case
const switchCase = (caseValue: string) => {
  switch (caseValue) {
    case "sundar":
      return <h1>SUndar</h1>;
    case "priya":
      return <h1>Priya</h1>;

    default:
      return <h1>hello</h1>;
  }
};

function App() {
  return (
    <div className="App">
      {/* <AntdLayout /> */}

      {/* <Dashboard lang={languages} />
      <CreateQuestion /> */}
      {/* {switchCase("pria")} */}
      {/* <QuesSteps/> */}
      <CreateTemplate />
    </div>
  );
}

export default App;
