import React, { useState } from "react";
import { hotspot } from "./helper";

const HotspotComponent = (props: any) => {
  const [stepHotspot, setStepHotspot] = useState(props.questionFlow.hotspot);
  const [input, setInput] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [showInput, setShowInput] = useState<boolean>(false);

  //   console.log(stepHotspot, stepHotspot.length);

  const addSubStep = () => {
    if (!input) {
      return;
    }
    let ht = new hotspot();
    setStepHotspot([...stepHotspot, ht]);

    if (stepHotspot.length === 0) {
      setStepHotspot((prevState: any) =>
        prevState.map((el: any, i: number) =>
          i === currentStep
            ? {
                ...el,
                name: input,
              }
            : el
        )
      );
    } else {
      setStepHotspot((prevState: any) =>
        prevState.map((el: any, i: number) =>
          i === currentStep + 1
            ? {
                ...el,
                name: input,
              }
            : el
        )
      );
      setCurrentStep((prevState) => prevState + 1);
    }

    setInput("");
    setShowInput(false);
  };

  const imageHandler = (e: any) => {
    if (stepHotspot.length === 0) {
      return;
    }

    if (stepHotspot[currentStep].areas.length === 4) {
      return;
    }

    let coords = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];

    setStepHotspot((prevState: any) =>
      prevState.map((step: any, i: number) =>
        i === currentStep
          ? {
              ...step,
              areas: [...step.areas, ...coords],
            }
          : step
      )
    );
  };

  const handleDone = () => {
    props.finalButton(stepHotspot, props.activeQues);
    props.setShowFullImage(false);
  };

  //   console.log("stepHotspot>>>", stepHotspot);

  return (
    <div className="hotspot">
      <div className="hotspot__header">
        <div className="hotspot__left">
          {props.questionFlow.hotspot.length === 0 &&
          stepHotspot.length === 0 ? (
            <h1>No Steps Added</h1>
          ) : (
            <select>
              {stepHotspot.map((hotspot: any, i: number) => (
                <option value={i}>
                  {i + 1} {hotspot.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="hotspot__middle">
          {showInput && (
            <>
              <input
                type="text"
                placeholder="enter sub name"
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={addSubStep}>Add Sub Name</button>
            </>
          )}
        </div>

        <div>
          {stepHotspot.length !== 0 &&
            stepHotspot[currentStep].areas.map((el: string, i: number) => (
              <span className="coords">{el}</span>
            ))}
        </div>

        <div className="hotspot__right">
          <button onClick={() => setShowInput(true)}>Add step</button>
        </div>
      </div>
      <div className="hotspot__body">
        <img
          src={props.questionFlow.imgURL}
          onClick={(e) => imageHandler(e)}
          alt=""
        />
      </div>
      <button onClick={handleDone}>Done</button>
    </div>
  );
};

export default HotspotComponent;
