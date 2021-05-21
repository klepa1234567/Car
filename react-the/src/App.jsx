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
        pageTitle: 'React components'
    }
   changeTit = (op) => {
        const oldTitle = this.state.pageTitle;
        const nweTitle = op;
        this.setState({
            pageTitle: nweTitle,
        })
   }
    handleInput = (event) =>{
        this.setState({
            pageTitle: event.target.value
        })
    }
    render(){
      const divStyle ={
          textAlign: 'center'
      }


    return (
        <div style ={divStyle}>
            <h1>{this.state.pageTitle}</h1>
            <input type={'text'}  onChange={this.handleInput}/>
            <button onClick={this.changeTit.bind(this, "Hello")}>Change title</button>

            { this.state.cars.map((car, index) => {
            return(
            <Car
            key={index}
            name = {car.name}
            year = {car.year}
            onChangeTitle={this.changeTit.bind(this, car.name)}
            />
            )
        })}

        </div>
        )
  }
}

export default App;
