import React from "react";
import "./Instruction.less";

export class hotspot {
  name: string;
  areas: number[];

  constructor() {
    this.name = "";
    this.areas = [];
  }
}
export class QuestionObject {
  event: string;
  image: File | null;
  imageUrl: string;
  hotspot: hotspot[];
  expectedText?: string;
  constructor() {
    this.event = "";
    this.imageUrl = "";
    this.image = null;
    this.hotspot = [];
  }
}

////typescript interface props
export interface instructionArr {
  language: number | undefined;
  instruction: string;
}

export interface TEMPLATE_INPUTS {
  language: undefined | number;
  totalNoOfSections: undefined | number;
  totalNoOfQuestions: undefined | number;
  totalNoOfMarks: undefined | number;
  templateName: string;
}

interface Prop {
  instruction: instructionArr;
  index: number;
  setInstruction(text: string, index: number): void;
  removeInstruction(index: number): void;
  instructionsLength: number;
  questionError?: string;
  sectionName: string;
}

const Instruction: React.FC<Prop> = (props) => {
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.setInstruction(e.target.value, props.index);
  };
  const clearInstruction = () => {
    props.setInstruction("", props.index);
  };
  const removeInstruction = () => {
    props.removeInstruction(props.index);
  };

  return (
    <div
      className={`instruction ${
        props.instructionsLength > 1 ? "instruction__decrease" : ""
      }`}
    >
      <div
        className={`instruction__top ${
          props.instructionsLength > 1 ? "instruction__top-decrease" : ""
        }`}
      >
        <span className="instruction__top-heading">
          {props.sectionName === "question" ? "QUESTION " : "INSTRUCTION"}{" "}
          {props.instruction.language === 1 ? `(ENGLISH)` : `(HINDI)`}
        </span>
        {props.questionError && props.index === 0 && (
          <span className="error__label-w-0">{props.questionError}</span>
        )}
        <div className="instruction__top-buttons">
          <button onClick={clearInstruction} className="btn-light-blue">
            CLEAR
          </button>
          {props.index >= 1 && <h1>X</h1>}
        </div>
      </div>
      <textarea
        value={props.instruction.instruction}
        onChange={changeHandler}
        className={`instruction__textarea-wrapper ${
          props.instructionsLength > 1 ? "instruction__textarea-decrease" : ""
        }`}
      ></textarea>
    </div>
  );
};

export default Instruction;
