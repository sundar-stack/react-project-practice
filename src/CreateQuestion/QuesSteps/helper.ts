export class hotspot {
  name: string;
  areas: string[];
  constructor() {
    this.name = "";
    this.areas = [];
  }
}

export class QuestionStepsObject {
  event: string;
  image: File | null;
  imgURL: string;
  hotspot: hotspot[];

  constructor() {
    this.event = "";
    this.image = null;
    this.imgURL = "";
    this.hotspot = [];
  }
}

//   class mapFields{
//     id:string;
//     name:string;
//     shape:string;
//     coords:any[];
//     preFillColor:string;
//     constructor(){
//         this.id=''
//         this.name=''
//         this.shape='rect'
//         this.coords=[]
//         this.preFillColor=''
//     }
// }

//   export class coordinates{
//       name:string
//       areas:mapFields[]
//       constructor(){
//           this.name=""
//           this.areas=[]
//       }
//   }

//   export const  createMapper = (questionFlow:QuestionStepsObject):any =>{
//     let myInsideMap = new coordinates()

//     console.log("IN HELPER METHOD",questionFlow)

//     questionFlow.hotspot.forEach((coord,index)=>{
//         let newMapperItemData = new mapFields();
//         newMapperItemData.name=index.toString()
//         newMapperItemData.coords=coord.areas
//         if(index===0){
//             newMapperItemData.preFillColor='red'
//             newMapperItemData.id=(index+1).toString()
//         }else if(index>0 && index< questionFlow.hotspot.length-1){
//             newMapperItemData.preFillColor='blue'
//             newMapperItemData.id=(index+1).toString()
//         }else{
//             newMapperItemData.preFillColor=''
//             newMapperItemData.id='1000'
//         }

//         myInsideMap.areas = [ ...myInsideMap.areas , newMapperItemData]
//     })
//     console.log("IN HELPER METHOD MY INSIDER MAP",myInsideMap)

//     myInsideMap.name='my-map'
//     return myInsideMap
//   }

//for react image mapper we have to pass map
// {
//     name:"my-map",
//     areas:[
//         {
//             id:'1',
//             name:"sundar",
//             preFillColor: "red",
//             shape:"rect"
//             coords:["11"]
//         }
//     ]
// }

export class mapperItemData {
  id: string;
  name: string;
  preFillColor: string;
  coords: string[];
  shape: string;
  constructor() {
    this.id = "";
    this.name = "";
    this.preFillColor = "";
    this.coords = [];
    this.shape = "rect";
  }
}

export class mapperData {
  name: string;
  areas: mapperItemData[];
  constructor() {
    this.name = "";
    this.areas = [];
  }
}

export const createMapper = (currentQuestionStep: QuestionStepsObject): any => {
  console.log("currentQuestionStep>>>>", currentQuestionStep);

  let newMapperData = new mapperData();

  currentQuestionStep.hotspot.forEach((element, index) => {
    console.log("ELEMENT", element);
    
    let newMapperItemData = new mapperItemData();
    // newMapperItemData.id = index.toString();
    newMapperItemData.name = element.name;
    newMapperItemData.coords = element.areas;
    // newMapperItemData.preFillColor = "red";
    // newMapperItemData.shape = "rect";

            if(index===0){
            newMapperItemData.preFillColor='red'
            newMapperItemData.id=(index+1).toString()
        }else if(index>0 && index< currentQuestionStep.hotspot.length-1){
            newMapperItemData.preFillColor='blue'
            newMapperItemData.id=(index+1).toString()
        }else{
            newMapperItemData.preFillColor='yellow'
            newMapperItemData.id='1000'
        }

    newMapperData.areas = [...newMapperData.areas, newMapperItemData];
  });
  newMapperData.name = "my-map";
  return newMapperData;
};
