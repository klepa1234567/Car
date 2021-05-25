import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car.jsx'

class App extends Component {
    state = {
        cars:[
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010},
        ],
        pageTitle: 'React components',
        showCars: false
    }

    onChangeName (customName, index) {
        const carWithNewName = this.state.cars[index];
        carWithNewName.name = customName;

        const newCars = [...this.state.cars];
        newCars[index] = carWithNewName;

        this.setState({
            cars: newCars
        })

    }

    deleteHandler(index){
        const cars = this.state.cars.concat()
        cars.splice(index, 1)

        this.setState({cars})
    }
    toggleCarsHander = () =>{
        this.setState({
            showCars: !this.state.showCars
        })
    }
    render(){
      const divStyle ={
          textAlign: 'center'
      }

      let cars = null

      if( this.state.showCars){
         cars = this.state.cars.map((car, index) => {
                  return(
                      <Car
                          key={index}
                          name = {car.name}
                          year = {car.year}
                          onDelete={this.deleteHandler.bind(this, index)}
                          onChangeName={(event) => this.onChangeName(event.target.value, index)}
                      />
                  )
              })
      }


    return (
        <div style ={divStyle}>
            <h1>{this.state.pageTitle}</h1>
            <button onClick={this.toggleCarsHander}>Toggle cars</button>
            <div style={{
                width:400,
                margin:'auto',
                paddingTop:'20px',
            }}>
            { cars }
            </div>

        </div>
        )
  }
}

export default App;
