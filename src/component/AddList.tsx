import React, { useState } from 'react'
import { Istate as Props } from '../App'

interface Iprops {
    people: Props['people'],
    setPeople:React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddList:React.FC<Iprops> = ({people,setPeople}) => {
 const [input, setInput] = useState({
    name: "",
    age: "",
    note: ""
 })

 const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
 setInput({
    ...input, [e.target.name]:e.target.value
 })
 }

 const handleClick = ()=>{
 if(!input.name || !input.age || !input.note){
   return
 }
 else {
    setPeople([...people,{name: input.name,  age: parseInt(input.age), note:input.age}]) 
    }
 }
  return (
    <div style={{display:'flex',flexDirection:'column', width:'30%', margin:'3%'}}>
        <input style={{marginBottom:'5px'}}
         type="text"
         placeholder='name'
         name = 'name'
         onChange={handleChange}
         />
        <input style={{marginBottom:'5px'}}
         type="number"
         placeholder='age'
         name = 'age'
         onChange={handleChange}
         />
        <input style={{marginBottom:'5px'}}
         type="text"
         placeholder='position'
         name = 'note'
         onChange={handleChange}
         />
         <button onClick={handleClick}>addPeople</button>
         
    </div>
  )
}

export default AddList