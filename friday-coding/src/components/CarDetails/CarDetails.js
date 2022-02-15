import React,{useEffect,useState} from 'react';

function CarDetails({models,vehicleModels}) {  
  const[cars, getCars]= useState([]);  
  const[allCars,setAllCars] = useState([]); 

  useEffect(()=>{
    try{
        fetch(`http://localhost:8080/api/vehicles?make=Ford&model=Fiesta`)
        .then(response=>response.json())
        .then(result=>{
          getCars(result);
          setAllCars(result);
      })
    } catch(error)
    {
        console.log(error);
    }
  },[]);
  let carheaders=[];
  for(let head in cars[0])
  {
    carheaders.push(head.charAt(0).toUpperCase()+head.slice(1).toLowerCase());  
  }  

  function onchangeHandler(e) {
    console.log(e.target.value)
    let tempPostCars = []
    if(e.target.value.length != 0){
        cars.forEach((ele)=>{if(ele.fuelType.toLowerCase().includes(e.target.value.toLowerCase())){tempPostCars.push(ele)}})
        console.log(tempPostCars)
        getCars(tempPostCars)
    }
    else{
      getCars(allCars)
    }
  }

  return (
    <div>      
      <input className = {"searchBox"} type="search" placeholder ="Search by FuelType" onChange ={(e) =>onchangeHandler(e)}/>
        <table style = {{width:"100%"}}>
          <thead>
        <tr>
          {carheaders.map((carheader,index)=> (                        
            <th key = {index}>
              {carheader}
            </th>
          ))}
          </tr>
          </thead>
          <tbody>
          {cars.map((car,index)=>(
            <tr key={index}>
               <td>
                 {car.make}
              </td> 
              <td>
                 {car.model}
              </td> 
              <td>
                 {car.enginePowerPS}
              </td>
              <td>
                 {car.enginePowerKW}
              </td>
              <td>
                 {car.fuelType}
              </td>
              <td>
                 {car.bodyType}
              </td>
              <td>
                 {car.engineCapacity}
              </td> 
            </tr>
          ))}
          </tbody>
          
        </table>
        {/* pagination
        <TestPagination items ={cars} /> */}
    </div>
  )
}

export default CarDetails