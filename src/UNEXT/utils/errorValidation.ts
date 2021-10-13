export const validateFields = (...fields:any) =>{
    let errors:any= {}

    let errorFields = fields[0]
    
    // console.log("error fields>>>>",errorFields);
    
    if(errorFields.questionFields && !errorFields.questionFields.difficulty){
        errors.difficulty=`Difficulty Required`
    } 

    if(errorFields.questionFields && !errorFields.questionFields.selectedTag){
        errors.questionTag=`Question Tags Required`
    }

    if(errorFields.questionFields && !errorFields.questionFields.questionType){
        errors.questionType=`Question Type Required`
    }

    if(errorFields.questionFields && !errorFields.questionFields.marks){
        errors.marks = `Marks Required`
    }

    if(errorFields.instructionArray[0] && !errorFields.instructionArray[0].instruction){
        errors.question=`Question Required`
    }

    if(errorFields.templateInputs && !errorFields.templateInputs.totalNoOfSections){
        errors.totalNoOfSections = `Number of Sections Required`
    }
    
    if(errorFields.templateInputs && !errorFields.templateInputs.totalNoOfQuestions){
        errors.totalNoOfQuestions = `Total Number of Questions Required`
    }

    if(errorFields.templateInputs && !errorFields.templateInputs.totalNoOfMarks){
        errors.totalNoOfMarks = `Total Number of Marks Required`
    }

    if(errorFields.templateInputs && !errorFields.templateInputs.templateName){
        errors.templateName = `Template Name Required`
    }
    

    return errors;
}