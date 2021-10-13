import React from "react";
import "./App.css";
import AntdLayout from "./components/ANTD/AntdLayout";
import "antd/dist/antd.css";
import Dashboard from "./components/ANTD/Dashboard";
import QuesSteps from "./CreateQuestion/QuesSteps/QuesSteps";
import CreateTemplate from "./UNEXT/components/Template/CreateTemplate/CreateTemplate";
import CreateQuestion from "./UNEXT/components/CreateQuestion/CreateQuestion";
import UnextPractice from "./UNEXT/practice/UnextPractice";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import CustomDropdown from "./components/ANTD/Dropdown/CustomDropdown";
import Cascade from "./components/ANTD/Dropdown/Cascade";
import Filter from "./components/ANTD/Filter/Filter";
import MultiSelect from "./components/ANTD/Dropdown/MultiSelect";

// import CreateTemplate from "./sectionFiltering/CreateTemplate";

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
      {/* <CreateTemplate /> */}

      {/* //////unext */}

      {/* <CreateQuestion/>
      <CreateTemplate/> */}
      {/* <BrowserRouter>
        <Switch>
          <CustomDropdown />
          <Filter/>
          <Route exact path="/practice" component={UnextPractice}></Route>
          <Route
            exact
            path="/practice/edit/:id"
            component={UnextPractice}
          ></Route>
        </Switch>
      </BrowserRouter> */}
      <MultiSelect />
      {/* <Cascade /> */}
    </div>
  );
}

export default App;
