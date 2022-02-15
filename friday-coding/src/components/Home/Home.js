import React, { Component } from 'react';
import GetCarModel from '../GetCarModel/GetCarModel';

class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         carMakes:[],
         selectedModels:'',         
      }
    }
    componentDidMount() {
      ///// Fetching the value of make
      try{
        fetch(`http://localhost:8080/api/makes`)
        .then(response=>response.json())
        .then(result => this.setState({
          carMakes:result,
        }))        
    } catch(error)
    {
        console.log(error);
    }
    }
    onchangeHandler=(e) => {
      this.setState({selectedModels: e.target.value},()=>console.log(this.state.selectedModels))      
    }

  render() {
    return (      
        <div className="form-group"> 
        <header><h1>Welcome to Car Select Online Portal</h1></header>
            <div>
              <label>Select Car Maker</label>
            <select role="combobox" onChange={(e)=>this.onchangeHandler(e)} placeholder="Select Car Make">
            <option value={""} role="option">Select</option>
            {this.state.carMakes.map((carMake,index)=><option key={index} value={carMake} role="option">{carMake}</option>) }
            </select>            
            </div>
            <div> 
            <GetCarModel selectedModels={this.state.selectedModels}  />
            </div>             
            {/* {this.state.carMakes && this.state.models && this.state.vehicleModel?<CarDetails models={this.state.models} vehicleModels={this.state.vehicleModel} />:null} */}
        </div>       
    )
  }
}
export default Home
