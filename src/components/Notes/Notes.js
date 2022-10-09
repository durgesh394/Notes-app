import React, { useState } from 'react'
import "./Notes.css"
const Notes = (props) => {
        const [value ,setvalue] = useState("")
        
       
        return (
        <>
            <div className='notes-container' style={{ backgroundColor: props.colors }}>
                <textarea  value={value} onChange={(e)=>{setvalue(e.target.value)}} placeholder='Enter text' className='notes-text' style={{ backgroundColor: props.colors }} />
                <div className="action-Icon">
                    <span className='deleteicon' onClick={()=>{props.fun(props.id)}}><i class="fa-solid fa-trash"></i></span>
                    <span className='deleteicon'><i class="fa-solid fa-pen-to-square"></i></span>
                </div>
            </div>
        </>
    )

}

export default Notes
