import React, { Component } from 'react';
import './App.css';
import Measurment from './components/Measurment';
import Quantity from './components/Quantity';
import Convert from './components/Convert';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      physicalQuantityNumber: 0,
      firstUnit: 0,
      secondUnit: 0,
      physicalQuantities: ["Length", "Mass", "Temperature", "Time", "Area"],
      measurmentUnits: [
        ["Milimeters", "Centimeters", "Meters", "Kilometers", "Inches", "Feet", "Miles"],
        ["Micrograms", "Milligrams", "Grams", "Kilograms", "Pounds", "Tons"],
        ["degrees Celsius", "degrees Kelvin", "degrees Fahrenheit", "degrees Rankine"],
        ["Nanoseconds", "Microseconds", "Milliseconds", "Seconds", "Minutes", "Hours", "Days", "Weeks", "Months", "Years"],
        ["Square Millimeters", "Square Centimeters", "Square Meters", "Hectares", "Square Kilometers", "Square Inches", "Square Feet", "Square Miles"]
      ],
      unitsSymbols: [
        ["mm", "cm", "m", "km", "inch", "ft", "mi"],
        ["mcg", "mg", "g", "kg", "lb", "t"],
        ["C", "K", "F", "R"],
        ["ns", "mcs", "ms", "sec", "min", "hour", "day", "week", "month", "year"],
        ["mm2", "cm2", "m2", "ha2", "km2", "inch2", "ft2", "mi2"]
      ]
    };
  };

  selectPhysicalQuantityNumber = (e) => {
    this.setState({
      physicalQuantityNumber: +(e.target.value),
    });
    e.preventDefault();
  };

  selectFirstPhysicalQuantity = (e) => {
    this.setState({
      firstUnit: +(e.target.value),
    });
    e.preventDefault();
  };

  selectSecondPhysicalQuantity = (e) => {
    this.setState({
      secondUnit: +(e.target.value),
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <Measurment 
          selectPhysicalQuantityNumber={this.selectPhysicalQuantityNumber}
          physicalQuantityNumber={this.state.physicalQuantityNumber}
          physicalQuantities={this.state.physicalQuantities}
        />
        <Quantity 
          physicalQuantityNumber={this.state.physicalQuantityNumber}
          firstUnit={this.state.firstUnit}
          secondUnit={this.state.value2}
          measurmentUnits={this.state.measurmentUnits}
          selectFirstPhysicalQuantity={this.selectFirstPhysicalQuantity}
          selectSecondPhysicalQuantity={this.selectSecondPhysicalQuantity}
        />
        <div className="container">
          <div className="row">
            <div className="col-6 text-center">
              <Convert 
                units={this.state.firstUnit}
                physicalQuantityNumber={this.state.physicalQuantityNumber}
                measurmentUnits={this.state.measurmentUnits}
                unitsSymbols={this.state.unitsSymbols}
              />
            </div>
            <div className="col-6 text-center">
              <Convert 
                units={this.state.secondUnit}
                physicalQuantityNumber={this.state.physicalQuantityNumber}
                measurmentUnits={this.state.measurmentUnits}
                unitsSymbols={this.state.unitsSymbols}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;