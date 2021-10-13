
import React from 'react'

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

interface PROPS {
    sectionData:templateSectionObject
    index:number
    handleSectionFieldsChange:(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ,index:number)=>void
}

const TemplateSection:React.FC<PROPS> = (props) => {
    console.log("props",props);
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        props.handleSectionFieldsChange(e,props.index)
     }

    return (
        <div className="templateSection">
            <div className="templateSection__top">

                <div className="input__wrapper input__container">
                <input type="text" className="input input-blue" placeholder="SECTION NAME" name="sectionName" id="sectionName" onChange={handleChange}/>
                <label htmlFor="sectionName" className="input__label">Section Name</label>
                </div>
             

             <div className="dropdown__container template__section-dropdown">
                    <div className='dropdown'>
                        <select value={props.sectionData.questionType} name="questionType" onChange={handleChange} className='dropdown__wrapper'>
                        <option value="" selected disabled>Question Type</option>
                            <option value="MS EXCEL">MS EXCEL</option>
                            <option value="MS OFFICE">MS OFFICE</option>
                        </select>
                    </div>
             </div>

            
                <div className="input__wrapper">
                <input type="number" className="input" placeholder="NO of questions allocated for this section" name="questionsAllocated" id="questionsAllocated" value={props.sectionData.questionsAllocated} onChange={handleChange}/>
                <label htmlFor="questionsAllocated" className="input__label">NO of questions allocated for this section</label>
                </div>
             

                <div className="input__wrapper">
                <input type="number" className="input" placeholder="Marks allocated for this section" name="marksAllocated" id="marksAllocated" required value={props.sectionData.questionsAllocated} onChange={handleChange}/>
                <label htmlFor="marksAllocated" className="input__label">Marks allocated for this section</label>
                </div>
        

             <div className="dropdown__container template__section-dropdown">
                    <div className='dropdown'>
                        <select value={props.sectionData.tags} name="tags" onChange={handleChange} className='dropdown__wrapper'>
                        <option value="" selected disabled>Tags / Topics</option>
                            <option value={`HYD`}>HYDERABAD</option>
                            <option value={`SHM`}>SHIMLA</option>
                        </select>
                    </div>
             </div>
                 
            </div>

            <div className="templateSection__filter-wrapper">
      
            </div>
            <div className="templateSection__bottom">
                       <span className="templateSection__bottom-text">
                           Total No of Questions Left : 3
                       </span>
                       <span className="templateSection__bottom-text">
                           Total Marks Left : 20
                       </span>
            </div>
        </div>
    )
}

export default TemplateSection;
