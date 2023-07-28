import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//jsx is syntax entension of js
//it allows us to write something that looks like HTML inside JS
class App extends Component {
  constructor(){
    super();
    this.state={

      cars:[
        {
          id:1,
          name:"Ford Mustang"
        },
        {
          id:2,
          name:"Toyota Supra"
        },
        {
          id:3,
          name:"Gwagon"
        },
        {
          id:4,
          name:"Nissan GTR"
        },
        {
          id:5,
          name:"Ferrari"
        },
      ]
      /* ,
     car1:{
      name:"Ford Mustang"
     },
     car2:{
      name:"Toyota Supra"
     },
     car3:{
      name:"Gwagon"
     },
     car4:{
      name:"Nissan GTR"
     },
     car5:{
      name:"Ferrari"
     } */
    }
  }

      
  render(){
    //key props
    return (
      <div className='App'>
        {this.state.cars.map((car,id)=>{
          return <h1 key={car.id}>{car.name}</h1>
        })
        }
        
        
      </div>

    );
  }
  
}

export default App; 
