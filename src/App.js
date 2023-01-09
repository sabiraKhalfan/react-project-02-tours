import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {

  const [loading,setLoading ]= useState(true);

  const [tours,setTours]=useState([]);

  const handleRemove =(id)=>{
  const newTours =tours.filter((tour)=>(tour.id !== id))
  setTours(newTours);

  }
  


  const fetchTours= async()=>{
    setLoading(true)
    try {
      const response =await fetch(url);
      const tours= await response.json();
      console.log(tours)
      setLoading(false);
      
      setTours(tours)
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  
   
   }

   useEffect(()=>{
    fetchTours();
   },[])



  if(loading){
    return <>
    <Loading/>
    </> 
    
  }
  if(tours.length===0){
    return <> 
    <div className="title">
      <h2>No tours Left</h2>
      <button onClick={fetchTours}>refresh</button>
    </div>
    </>
  }
 return(
 
  <Tours tours={tours} handleRemove={handleRemove}/>
 )
}

export default App
