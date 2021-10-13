

export class templateSectionObject {
    questionType:string
    questionsAllocated:number | undefined
    marksAllocated:number | undefined
    tags:string
    sectionName:string
    filterSection:[]
    constructor(){
        this.questionType = ""
        this.questionsAllocated = undefined
        this.marksAllocated = undefined
        this.tags = ""
        this.sectionName = ""
        this.filterSection = []
    }
}
export class hotspot{
    name:string
    areas:number[]
    
    constructor(){
        this.name=""
        this.areas=[]
    }
}
export class QuestionObject {
    event: string;
    image: File | null;
    imageUrl:string;
    hotspot: hotspot[];
    expectedText?:string;
    constructor() {
        this.event = ''
        this.imageUrl=""
        this.image = null
        this.hotspot = []
    }
}

////typescript interface props
export interface instructionArr{
    language:number | undefined,
    instruction:string
}

export interface TEMPLATE_INPUTS{
    language:undefined | number,
    totalNoOfSections:undefined | number,
    totalNoOfQuestions:undefined | number,
    totalNoOfMarks:undefined | number,
    templateName:string,
}
