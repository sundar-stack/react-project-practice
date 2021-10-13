import { QuestionObject } from "../Models/QuestionObject";

class map{
    id:string;
    name:string;
    shape:string;
    coords:number[];
    preFillColor:string;
    constructor(){
        this.id=''
        this.name=''
        this.shape='rect'
        this.coords=[]
        this.preFillColor=''
    }
}
export class coordinates{
    name:string;
    areas:map[];
    constructor(){
        this.name=''
        this.areas=[]
    }
}
export const createMap=(coords:QuestionObject)=>{
    var myInsideMap=new coordinates()
    console.log("IN HELPER METHOD",coords)
    coords.hotspot.forEach((coord,index)=>{
        var tempMap=new map();
        tempMap.name=index.toString()
        tempMap.coords=coord.areas
        if(index===0){
            tempMap.preFillColor='red'
            tempMap.id=(index+1).toString()
        }else if(index>0 && index<coords.hotspot.length-1){
            tempMap.preFillColor='blue'
            tempMap.id=(index+1).toString()
        }else{
            tempMap.preFillColor=''
            tempMap.id='1000'
        }
        myInsideMap.areas.push(tempMap)
    })
    console.log("IN HELPER METHOD MY INSIDER MAP",myInsideMap)
    myInsideMap.name='my-map'
    return myInsideMap
    
}

// class mapHelper{
//     id:string;
//     name:string;
//     shape:string;
//     coords:number[];
   
//     constructor(){
//         this.id=''
//         this.name=''
//         this.shape='rect'
//         this.coords=[]

//     }
// }
// export class coordinatesHelper{
//     name:string;
//     areas:mapHelper[];
//     constructor(){
//         this.name=''
//         this.areas=[]
//     }
// }

// const createMapForQuestionRendering=(coords:QuestionObject)=>{
//     var myInsideMap=new coordinatesHelper()
//     console.log("IN HELPER METHOD",coords)
//     coords.hotspot.forEach((coord,index)=>{
//         var tempMap=new mapHelper();
//         tempMap.name=index.toString()
//         tempMap.coords=coord.areas
//         if(index===0){
//             tempMap.id=(index+1).toString()
//         }else if(index>0 && index<coords.hotspot.length-1){
//             tempMap.id=(index+1).toString()
//         }else{
//             tempMap.id='1000'
//         }
//         myInsideMap.areas.push(tempMap)
//     })
//     console.log("IN HELPER METHOD MY INSIDER MAP",myInsideMap)
//     myInsideMap.name='my-map'
//     return myInsideMap
// }
