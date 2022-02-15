import React,{useEffect,useState} from 'react';
import CarDetails from '../CarDetails/CarDetails';

function GetCarModel({selectedModels}) {  
  const[models, getModel]= useState([]); 
  const[selectedModel, getSelectedModel]= useState("");

  useEffect(()=>{
    try{
        fetch(`http://localhost:8080/api/models?make=ford`)
        .then(response=>response.json())
        .then(result=>{
            getModel(result);
        })
    } catch(error)
    {
        console.log(error);
    }
  },[selectedModel]);
  function onchangeHandler(e) {
    getSelectedModel(e.target.value)
  }
  return (
    <div>
        <label>Select Car Model</label>
          <select placeholder="Select Car Model" onChange={(e)=>onchangeHandler(e)}>
            <option value={""}>Select</option>
            {selectedModels === "FORD"? models.map((model,index)=><option key={index} value={model}>{model}</option>):null }
            </select> 
            {selectedModel === "Fiesta" && selectedModels === "FORD"? <CarDetails selectedModel={selectedModel} /> :null}           
    </div>    
  )
}

export default GetCarModel