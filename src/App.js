import { useState } from "react";
import Title from '../src/components/title'
import './App.css'



const App = () => {
  let [showItems, setShowItems] = useState(true)
  let [events, setEvents] = useState([
    {title: "akhror's birthday party", id: 1},
    {title: "doniyor's live stream", id: 2},
    {title: "match: manchester united vs barcelona", id: 3}
  ])


  // delete item
  let deleteItem =  (id)=>{
    let filArr = events.filter((item)=>{
      return item.id !== id
    })
    setEvents(filArr)
  }



  return (
    <div className='App'>
    <Title />
       {showItems && <button onClick={()=>setShowItems(false)}>Hide Items</button>}
       {!showItems && <button onClick={()=>setShowItems(true)}>Show Items</button>}
       <hr />
       <br />

     {showItems && <div>
     {events.length === 0 && <h2>Not conet Yet :(</h2>}
      {showItems && events.map((item)=>{
        return(
          <div key={item.id}>
            <h1>{item.title}</h1>
            <button onClick={()=>deleteItem(item.id)}>Delete button</button>
          </div>
        )
       })}
     </div>}
    </div>
  );
}

export default App