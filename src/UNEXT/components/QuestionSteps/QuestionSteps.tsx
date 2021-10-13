import React, { useState } from "react";
import { QuestionObject } from "../../Models/QuestionObject";
import "./QuestionSteps.less";

interface Prop {
  index: number;
  updateImage(i: number, file: File | null): void;
  changeActiveQuestion(i: number): void;
  changeEventHandler(index: number, event: string): void;
  openFullImage(): void;
  steps: QuestionObject;
  enableButtons: boolean;
  activeQuestion: number;
}
const QuestionSteps: React.FC<Prop> = (props) => {
  const [showEvents, setShowEvents] = useState<boolean>(false);
  const getImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    // console.log("MY FILE", typeof event.target.files, event.target.files?.item(0))

    var temp = event.target.files!.item(0);
    console.log("GET IMAGE", temp);
    if (temp !== null) {
      props.updateImage(props.index, temp);
    }
  };
  const updateActiveQuestion = () => {
    props.changeActiveQuestion(props.index);
  };
  const updateEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof e.target.value);
    props.changeEventHandler(props.index, e.target.value);
  };
  const checkToOpenFullImage = () => {
    if (props.steps.image) {
      props.openFullImage();
    }
  };

  // console.log("steps>>",steps);

  return (
    <div
      className={`question__steps ${
        props.activeQuestion === props.index && "question__steps-active"
      } ${showEvents ? "question__steps-opened" : ""}`}
      onClick={updateActiveQuestion}
    >
      <div className="question__steps-top">
        <div className="question__steps-label--wrapper">
          <input
            type="checkbox"
            className="question__steps-checkbox"
            checked={props.enableButtons}
            id="checkbox"
          />
          <label htmlFor="checkbox" className="checkbox-label"></label>
          <span className="question__steps-label">STEP {props.index + 1}</span>
        </div>

        <button
          className="btn-white"
          onClick={() => setShowEvents((prevState) => !prevState)}
        >
          EVENT
        </button>

        <input
          type="file"
          accept="image/*"
          onChange={getImage}
          className="question__steps-upload--btn"
        />
        <button onClick={checkToOpenFullImage} className="btn-white">
          HOTSPOT
        </button>
      </div>

      {showEvents && props.activeQuestion === props.index && (
        <div className="question__steps-bottom">
          <div className="questionSteps__radio">
            <div className="questionSteps__radio-wrapper">
              <input
                type="radio"
                className="questionSteps__radio-input"
                id="Single Click"
                checked={props.steps!.event === "Single Click"}
                value="Single Click"
                onChange={updateEvent}
              />
              <label
                htmlFor="Single Click"
                className="questionSteps__radio-label"
              >
                <span className="questionSteps__radio-button"></span>
                Single Click
              </label>
            </div>

            <div className="questionSteps__radio-wrapper">
              <input
                type="radio"
                className="questionSteps__radio-input"
                id="Double Click"
                checked={props.steps!.event === "Double Click"}
                value="Double Click"
                onChange={updateEvent}
              />
              <label
                htmlFor="Double Click"
                className="questionSteps__radio-label"
              >
                <span className="questionSteps__radio-button"></span>
                Double Click
              </label>
            </div>

            <div className="questionSteps__radio-wrapper">
              <input
                type="radio"
                className="questionSteps__radio-input"
                id="Keyboard"
                checked={props.steps!.event === "Keyboard"}
                value="Keyboard"
                onChange={updateEvent}
              />
              <label htmlFor="Keyboard" className="questionSteps__radio-label">
                <span className="questionSteps__radio-button"></span>
                Keyboard
              </label>
            </div>
            <div className="questionSteps__radio-wrapper">
              <input
                type="radio"
                className="questionSteps__radio-input"
                id="Drag"
                checked={props.steps!.event === "Drag"}
                value="Drag"
                onChange={updateEvent}
              />
              <label htmlFor="Drag" className="questionSteps__radio-label">
                <span className="questionSteps__radio-button"></span>
                Drag
              </label>
            </div>
          </div>
          <div>
            {props.steps.event === "Keyboard" && (
              <textarea className="question__event-keyboard--input" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionSteps;
