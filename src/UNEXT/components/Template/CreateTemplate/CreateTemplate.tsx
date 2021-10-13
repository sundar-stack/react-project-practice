import React, { useEffect, useRef, useState } from "react";
import "./CreateTemplate.less";
import Instruction from "../../Instruction/Instruction";

import {
  instructionArr,
  templateSectionObject,
  TEMPLATE_INPUTS,
} from "../../../Models/QuestionObject";
import { validateFields } from "../../../utils/errorValidation";
import TemplateSection from "./TemplateSection";

const CreateTemplate: React.FC = () => {
  const [instructionArray, setInstructionArray] = useState<instructionArr[]>([
    {
      language: 1,
      instruction: "",
    },
  ]);

  const [templateInputs, setTemplateInputs] = useState<TEMPLATE_INPUTS>({
    language: undefined,
    totalNoOfSections: undefined,
    totalNoOfQuestions: undefined,
    totalNoOfMarks: undefined,
    templateName: "",
  });

  const [templateInputErrors, setTemplateInputErrors] = useState<any>({});
  const [passNext, setPassNext] = useState<boolean>(false);
  const sectionRef = useRef<any>();

  const [sectionsFlow, setSectionsFLow] = useState<templateSectionObject[]>();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "templateName") {
      setTemplateInputs({
        ...templateInputs,
        [e.target.name]: e.target.value,
      });
    } else {
      setTemplateInputs({
        ...templateInputs,
        [e.target.name]: parseInt(e.target.value),
      });
    }
  };

  const handleInputSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let tempArr: any = [];
    let sectionValue = Number(e.target.value);
    let newTemplateObject = new templateSectionObject();

    if (sectionValue > 100) {
      return;
    }

    if (sectionValue <= 0) {
      setTemplateInputs({ ...templateInputs, totalNoOfSections: undefined });
    } else {
      setTemplateInputs({ ...templateInputs, totalNoOfSections: sectionValue });
    }

    for (let i = 0; i < sectionValue; i++) {
      tempArr = [...tempArr, newTemplateObject];
    }
    setSectionsFLow(tempArr);
  };

  const setInstruction = (text: string, index: number) => {
    setInstructionArray((prevState: any) =>
      prevState.map((element: any, i: number) =>
        i === index ? { ...element, instruction: text } : element
      )
    );
  };

  const removeInstruction = (index: number) => {
    setInstructionArray((prevState: any) =>
      prevState.filter((element: any, i: number) => i !== index)
    );
  };
  const addInstruction = () => {
    setInstructionArray([
      ...instructionArray,
      {
        language: templateInputs.language ? templateInputs.language : 1,
        instruction: "",
      },
    ]);
  };

  const handleNext = () => {
    const errorFieldsObj = {
      templateInputs,
      instructionArray,
    };
    setTemplateInputErrors(validateFields(errorFieldsObj));

    //  if(Object.keys(validateFields(errorFieldsObj)).length > 0){
    //      setPassNext(false)
    //      return
    //  }else{
    setPassNext(true);
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "start",
        });
      }
    }, 200);
    //  }
  };

  const handleSectionFieldsChange = (e: any, i: number) => {
    console.log(e.target.name, e.target.value);

    let tempSections: any = sectionsFlow;

    const filter = tempSections.find((el: any, index: number) => i === index);
    const findIndex = tempSections.findIndex(
      (el: any, index: number) => i === index
    );

    console.log("FILTER", filter);

    tempSections[findIndex] = {
      ...filter,
      [e.target.name]: e.target.value,
    };

    console.log("tempSections", tempSections);
  };

  //console.log("sectionRef.current>>>",sectionRef.current);
  // console.log("ERRORS>>>",templateInputErrors);
  // console.log("templateInputs>>>>>>>", templateInputs);
  // console.log("instructionArray>>>>", instructionArray);
  //console.log("pass Next>>>>",passNext);

  console.log("sectionsArray>>>>", sectionsFlow);

  return (
    <div className="createTemplate">
      <div className="createTemplate__top">
        <div className="createTemplate__top-topFields">
          <div className="input__wrapper createTemplate__top-inputName">
            <input
              type="text"
              className="input input-blue"
              placeholder="TEMPLATE NAME"
              name="templateName"
              id="templateName"
              required
              value={templateInputs.templateName}
              onChange={handleInputChange}
            />
            <label htmlFor="templateName" className="input__label">
              TEMPLATE NAME
            </label>
            {templateInputErrors.templateName && (
              <span className="instruction__errors-top">
                {templateInputErrors.templateName}
              </span>
            )}
          </div>
        </div>

        <div className="createTemplate__top-bottomFields">
          <div className="input__wrapper createTemplate__top-inputSection">
            <input
              type="number"
              className="input"
              placeholder="NUMBER OF SECTIONS"
              name="totalNoOfSections"
              id="section"
              required
              value={templateInputs.totalNoOfSections}
              onChange={handleInputSectionChange}
              min="1"
              max="100"
            />
            <label htmlFor="section" className="input__label">
              NUMBER OF SECTIONS
            </label>
            {templateInputErrors.totalNoOfSections && (
              <span className="instruction__errors-top">
                {templateInputErrors.totalNoOfSections}
              </span>
            )}
          </div>

          <div className="input__wrapper createTemplate__top-inputQuestion">
            <input
              type="number"
              className="input"
              placeholder="TOTAL NUMBER OF QUESTIONS"
              name="totalNoOfQuestions"
              id="question"
              required
              value={templateInputs.totalNoOfQuestions}
              onChange={handleInputChange}
            />
            <label htmlFor="question" className="input__label">
              TOTAL NUMBER OF QUESTIONS
            </label>
            {templateInputErrors.totalNoOfQuestions && (
              <span className="instruction__errors-top">
                {templateInputErrors.totalNoOfQuestions}
              </span>
            )}
          </div>

          <div className="input__wrapper createTemplate__top-inputMarks">
            <input
              type="number"
              className="input input-blue"
              placeholder="TOTAL MARKS"
              name="totalNoOfMarks"
              id="marks"
              required
              value={templateInputs.totalNoOfMarks}
              onChange={handleInputChange}
            />
            <label htmlFor="marks" className="input__label">
              TOTAL MARKS
            </label>
            {templateInputErrors.totalNoOfMarks && (
              <span className="instruction__errors-top">
                {templateInputErrors.totalNoOfMarks}
              </span>
            )}
          </div>
        </div>

        <div className="createQuestion__instruction">
          <div className="createQuestion__instruction-left template__instruction">
            {instructionArray.map((instruction, index) => (
              <Instruction
                key={index}
                index={index}
                instruction={instruction}
                setInstruction={setInstruction}
                removeInstruction={removeInstruction}
                instructionsLength={instructionArray.length}
                questionError={templateInputErrors.question}
                sectionName="template"
              />
            ))}
          </div>

          <div className="createQuestion__instruction-right">
            <div className="create__question-language">
              <div className="dropdown language-dropdown">
                <select
                  value={templateInputs.language}
                  name="language"
                  onChange={handleInputChange}
                  className="dropdown__wrapper"
                >
                  <option value="" selected disabled>
                    ADD LANGUAGE
                  </option>
                  <option value={1}>ENGLISH</option>
                  <option value={2}>HINDI</option>
                </select>
              </div>

              <span onClick={addInstruction}>X</span>
            </div>

            <button onClick={handleNext} className="btn-skyBlue btn__width-50">
              NEXT
            </button>
          </div>
        </div>
      </div>

      {passNext && (
        <section
          className={`createTemplate__sections-container`}
          ref={sectionRef}
        >
          {sectionsFlow &&
            sectionsFlow.length !== 0 &&
            sectionsFlow.map((section, index) => (
              <TemplateSection
                key={index}
                sectionData={section}
                index={index}
                handleSectionFieldsChange={handleSectionFieldsChange}
              />
            ))}
        </section>
      )}
    </div>
  );
};

export default CreateTemplate;
