import React from 'react'
import { Istate as Iprops } from '../App'

const List: React.FC<Iprops> = ({people}) => {

const renderProps = ()=>{
    return people.map((person, index)=>(
        <li key={index} style={{listStyle:"none"}}>{"It's me, "+person.name+". My profession is "+ person.note+ ", and I am "+ person.age+ " years old"}</li>
    ))
}
  return (
    <ul>
     { renderProps()}
    </ul>
  )
}

export default List