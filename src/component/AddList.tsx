import React from 'react'

const AddList = () => {
  return (
    <div style={{display:'flex',flexDirection:'column', width:'30%', margin:'3%'}}>
        <input style={{marginBottom:'5px'}}
         type="text"
         placeholder='name'
         name = 'name'
         />
        <input style={{marginBottom:'5px'}}
         type="number"
         placeholder='name'
         name = 'name'
         />
        <input style={{marginBottom:'5px'}}
         type="text"
         placeholder='name'
         name = 'name'
         />
         <button>addPeople</button>
         
    </div>
  )
}

export default AddList