import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { createMapper, hotspot, QuestionStepsObject } from "./helper";
import HotspotComponent from "./HotspotComponent";
import ImageMapper from "react-img-mapper";
import "./steps.css";

const QuesSteps = () => {
  const [questionFlow, setQuestionFlow] = useState<QuestionStepsObject[]>([]);
  const [activeQues, setActiveQues] = useState<number | null>(null);
  const [showFullImage, setShowFullImage] = useState<boolean>(false);
  const [myMap, setMyMap] = useState(null);

  const [file, setFile] = useState<any>();
  const ref = useRef<any>(null);

  useEffect(() => {
    if (
      questionFlow.length !== 0 &&
      activeQues !== null &&
      questionFlow[activeQues].hotspot.length !== 0
    ) {
      console.log("i am in 22 TRUE");

      setMyMap(createMapper(questionFlow[activeQues]));
    } else {
      console.log("i am in 26 FALSE");
      setMyMap(null);
    }
  }, [ref, questionFlow, activeQues]);

  const addStep = () => {
    let quesObj = new QuestionStepsObject();
    // console.log(quesObj);
    if (questionFlow.length === 0) {
      setActiveQues(0);
    } else {
      setActiveQues((prevState: any) => prevState + 1);
    }
    setQuestionFlow([...questionFlow, quesObj]);

    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "end",
        });
      }
    }, 1000);
  };

  const delStep = () => {
    let temp = activeQues;
    if (activeQues === 0) {
      if (questionFlow.length - 1 === 0) {
        setActiveQues(null);
      } else {
        setActiveQues(0);
      }
    } else {
      setActiveQues((prevState: any) =>
        prevState !== null ? prevState - 1 : null
      );
    }
    setQuestionFlow((prevState) => prevState.filter((el, i) => i !== temp));
  };

  const imgChangeHandler = (e: any, index: number) => {
    let temp = questionFlow;
    temp[index].image = e.target.files.item(0);

    if (e.target.files.item(0) !== null) {
      setQuestionFlow((prevState) =>
        prevState.map((el, i) =>
          i === index
            ? {
                ...el,
                image: e.target.files.item(0),
                imgURL: URL.createObjectURL(e.target.files.item(0)),
              }
            : el
        )
      );
    }
  };

    console.log("questionFLOW>>>>>>>>", questionFlow);
  //   console.log("activeQues>>>>>>>>", activeQues);
  //   console.log("ref>>>>>>>>", ref.current);

  console.log("MYMAP?>>>>>>>>", myMap);
  console.log("MYMAP?>>>>>>>>", myMap);

  const finalButton = (hotspot: hotspot[], index: number) => {
    // console.log("hotspot from props>>>>>", hotspot);

    setQuestionFlow((prevState) =>
      prevState.map((el, i) =>
        i === index
          ? {
              ...el,
              hotspot: hotspot,
            }
          : el
      )
    );
  };

  return (
    <div>
      <button onClick={addStep}>ADD STEP</button>
      <button onClick={delStep}>DELETE STEP</button>

      <div className="steps">
        {questionFlow.map((step, index) => (
          <div
            className={`steps__continer ${
              activeQues === index ? "active-step" : ""
            }`}
            key={index}
            onClick={() => setActiveQues(index)}
            ref={ref}
          >
            <h1>Step {index + 1}</h1>
            <input type="file" onChange={(e) => imgChangeHandler(e, index)} />

            <button
              onClick={() => {
                if (activeQues !== null && questionFlow[activeQues].image) {
                  console.log("got heere");
                  setShowFullImage(true);
                }
              }}
            >
              HOTSPOT
            </button>
            <div className="normal__img">
              {questionFlow.length === 0 || myMap === null
                ? activeQues !== null &&
                  questionFlow[activeQues].image && (
                    <ImageMapper
                      src={questionFlow[activeQues].imgURL}
                      width={1000}
                      height={539}
                    />
                  )
                : activeQues !== null &&
                  questionFlow[activeQues].image && (
                    <ImageMapper
                      src={questionFlow[activeQues].imgURL}
                      map={myMap}
                      width={1000}
                      height={539}
                    />
                  )}
            </div>
          </div>
        ))}
      </div>

      {activeQues !== null && showFullImage && (
        <HotspotComponent
          questionFlow={questionFlow[activeQues]}
          activeQues={activeQues}
          finalButton={finalButton}
          setShowFullImage={setShowFullImage}
        />
      )}
    </div>
  );
};

export default QuesSteps;
