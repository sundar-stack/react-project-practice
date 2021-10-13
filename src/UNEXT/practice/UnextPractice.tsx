import React from "react";
import { useParams } from "react-router-dom";
import './UnextPractice.css'

const responseObj = [
  {
    contents: [
      {
        id: 0,
        language: 0,
        question: "c3VuZGFyIGlzIGEgZ29vZCBtYW4=",
      },
      {
        id: 1,
        language: 1,
        question: "d2hhdCBpcyB0aGUgZmF2b3VyaXRlIGZvb2QgaXRlbSA/",
      },
    ],
    ispublished: true,
    id: 1,
  },
  {
    contents: [
      {
        id: 0,
        language: 0,
        question: "c3Vwcml5YSBpcyBhIGdvb2QgZ2lybA==",
      },
      {
        id: 0,
        language: 0,
        question: "c3Vwcml5YSBpcyBhIGdvb2QgZ2lybA==",
      },
      {
        id: 0,
        language: 0,
        question: "c3Vwcml5YSBpcyBhIGdvb2QgZ2lybA==",
      },
      {
        id: 1,
        language: 1,
        question: "d2hhdCBpcyB0aGUgZmFydGhlc3QgcGxhbmV0IGZyb20gc3VuID8=",
      },
    ],
    ispublished: false,
    id: 2,
  },
];

const UnextPractice = () => {

  const { id }:any =  useParams();

  console.log(id);
  
  // string to base64

  //   let data = "what is the favourite food item ?"
  //   let stringToBase64 = btoa(data);

  //   let base64ToString = atob(stringToBase64);

  let response: any = [...responseObj];

  //   let newResponse: any = [];

  //   console.log("response>>>", response);

  //   responseObj.forEach((element, index) => {
  //     console.log("main-element", element);

  //     element.contents.forEach((content, i) => {
  //       console.log("main-content", content);
  //       let base64ToString = atob(content.question);
  //       console.log(base64ToString);

  //       response[index] = [
  //         ...response,
  //         {
  //           ...element,
  //           content: [
  //             ...element.contents,
  //             { ...content, question: base64ToString },
  //           ],
  //         },
  //       ];
  //     });
  //   });

  console.log("response>>>>>>>", response);

  return (
    <div>
      {id ? <h1>I AM EDIT</h1> : <h1>I AM PRACTICE</h1>}
      {/* <h3>{stringToBase64}</h3>
      <h4>{base64ToString}</h4> */}

      {responseObj.map((element, index) => {
        console.log("element>>>>", element);

        return (
          <div>
            {element.contents.map(
              (finalElement, index) =>
                //   console.log("finalElement>>>>",finalElement);
                finalElement.language === 1 && (
                  <div className="section">
                    <h1>{atob(finalElement.question)}</h1>
                    <h2>{`${element.ispublished}`}</h2>
                    <h2>{element.id}</h2>
                  </div>
                )
            )}
          </div>
        );
      })}
    </div>
  );
};

export default UnextPractice;
