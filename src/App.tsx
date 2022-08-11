import React, {useState} from 'react';
import './App.css';
import List from './component/List';

export interface Istate{
  people:{
    name: string,
    age: number,
    note : string
  }[]
}
const App:React.FC =()=> {
const [people, setPeople] = useState<Istate["people"]>([
  {
    name:"teklehaimanot",
    age: 25,
    note: "Software developer"
  },
  {
    name:"Amanuel",
    age: 24,
    note: "Mobile Developer"
  }
])
  return (
    <div className="App">
      <List people = {people}/>

    </div>
  );
}

export default App;
