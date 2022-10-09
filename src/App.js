import { useEffect, useState } from 'react';
import './App.css';
import "./components/Sidebar/Sidenav.css";
import Notes from "./components/Notes/Notes"
import { Filter } from '@mui/icons-material';

const App = () => {
  const [show, setshow] = useState(true);
  const [color, setcolor] = useState([])

  // funtion for delation
  function dlt(id) {
   
    const newdata = Filter((elm ,ind)=>{
      return  ind == id
    })
    
  //   if (window.confirm("are you sure you want to delete")) {
    //   }
      alert(newdata)

   }

  return (
    <div className='app'>
      <div className='Sidenav-container'>
        <span onClick={() => { setshow(!show) }} ><i className="fa-solid fa-plus plush"></i></span>
        {
          show ? <div className="colorbtn">

            <button className='colors' style={{ backgroundColor: "#C39BD3", padding: "5px" }}
              onClick={() => { setcolor(([...color, "#C39BD3"])) }}></button>
            <button className='colors' style={{ backgroundColor: "#A2D9CE", padding: "5px" }}
              onClick={() => { setcolor([...color, "#A2D9CE"]) }}></button>
            <button className='colors' style={{ backgroundColor: "#52BE80", padding: "5px" }}
              onClick={() => { setcolor([...color, "#52BE80"]) }}></button>
            <button className='colors' style={{ backgroundColor: "#C39BD3", padding: "5px" }}
              onClick={() => { setcolor([...color, "#C39BD3"]) }}></button>
          </div> : <div className="colorbtn"> </div>
        }
      </div>


      <div className="notescontainer">
        <h1 className="top-heading">Note's</h1><br />
        {
          color.map((color, index) => {
            return (
              <>
                <Notes key={index} colors={color} id={index} fun={dlt} />
              </>
            )
          })
        }

      </div>

    </div>
  )
}


export default App;
