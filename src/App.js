import React, { Component } from 'react';
import './App.css';
import Measurment from './components/Measurment';
import Quantity from './components/Quantity';
import Convert from './components/Convert';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMillimetersChange = this.handleMillimetersChange.bind(this);
    this.handleCentimetersChange = this.handleCentimetersChange.bind(this);
    this.handleMetersChange = this.handleMetersChange.bind(this);
    this.handleKilometersChange = this.handleKilometersChange.bind(this);
    this.handleInchesChange = this.handleInchesChange.bind(this);
    this.handleFeetsChange = this.handleFeetsChange.bind(this);
    this.handleMilesChange = this.handleMilesChange.bind(this);
    this.state = {
      physicalQuantityNumber: 0,
      firstUnit: 0,
      secondUnit: 0,
      physicalQuantities: ["Length"], // ["Length", "Mass", "Temperature", "Time", "Area"],
      measurmentUnits: [
        ["Millimeters", "Centimeters", "Meters", "Kilometers", "Inches", "Feet", "Miles"],
        // ["Micrograms", "Milligrams", "Grams", "Kilograms", "Pounds", "Tons"],
        // ["degrees Celsius", "degrees Kelvin", "degrees Fahrenheit", "degrees Rankine"],
        // ["Nanoseconds", "Microseconds", "Milliseconds", "Seconds", "Minutes", "Hours", "Days", "Weeks", "Months", "Years"],
        // ["Square Millimeters", "Square Centimeters", "Square Meters", "Hectares", "Square Kilometers", "Square Inches", "Square Feet", "Square Miles"]
      ],
      unitsSymbols: [
        ["mm", "cm", "m", "km", "inch", "ft", "mi"],
        // ["mcg", "mg", "g", "kg", "lb", "t"],
        // ["C", "K", "F", "R"],
        // ["ns", "mcs", "ms", "sec", "min", "hour", "day", "week", "month", "year"],
        // ["mm2", "cm2", "m2", "ha2", "km2", "inch2", "ft2", "mi2"]
      ],
      length: '',
      scale: 'mm'
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


  handleMillimetersChange(length) {
    this.setState({scale: "mm", length});
  };
  handleCentimetersChange(length) {
    this.setState({scale: "cm", length});
  };
  handleMetersChange(length) {
    this.setState({scale: "m", length});
  };
  handleKilometersChange(length) {
    this.setState({scale: "km", length});
  };
  handleInchesChange(length) {
    this.setState({scale: "inch", length});
  };
  handleFeetsChange(length) {
    this.setState({scale: "ft", length});
  };
  handleMilesChange(length) {
    this.setState({scale: "mi", length});
  };

  toMm = (x, y) => {
    switch (true) {
      case x === "cm":
        return y * 10;
      case x === "m":
        return y * 1000;
      case x === "km":
        return y * 1000000;
      case x === "inch":
        return y * 25.4;
      case x === "ft":
        return y * 304.8;
      case x === "mi":
        return y * 1609344;
      default: 
        return y;
    };
  };
  toCm = (x, y) => {
    switch (true) {
      case x === "mm":
        return y / 10;
      case x === "m":
        return y * 100;
      case x === "km":
        return y * 100000;
      case x === "inch":
        return y * 2.54;      
      case x === "ft":
        return y * 30.48;     
      case x === "mi":
        return y * 160934.4;
      default: 
        return y;
    };
  };
  toM = (x, y) => {
    switch (true) {
      case x === "mm":
        return y / 1000;
      case x === "cm":
        return y / 100;
      case x === "km":
        return y * 1000;
      case x === "inch":
        return y * 0.0254;
      case x === "ft":
        return y * 0.3048;
      case x === "mi":
        return y * 1609.344;
      default: 
        return y;
    };
  };
  toKm = (x, y) => {
    switch (true) {
      case x === "mm":
        return y / 1000000;
      case x === "cm":
        return y / 100000;
      case x === "m":
        return y / 1000;
      case x === "inch":
        return y * 2.54 / 100000;
      case x === "ft":
        return y * 0.0003048;
      case x === "mi":
        return y * 1.609344;
      default: 
        return y;
    };
  };
  toInch = (x, y) => {
    switch (true) {
      case x === "mm":
        return y * 0.039370;
      case x === "cm":
        return y * 0.39370;
      case x === "m":
        return y * 39.370;
      case x === "km":
        return y * 39370.07;
      case x === "ft":
        return y * 12;
      case x === "mi":
        return y * 63360;
      default: 
        return y;
    };
  };
  toFt = (x, y) => {
    switch (true) {
      case x === "mm":
        return y * 0.0032808;
      case x === "cm":
        return y * 0.032808;
      case x === "m":
        return y * 3.2808399;
      case x === "km":
        return y * 3280.8399;
      case x === "inch":
        return y * 0.083333;
      case x === "mi":
        return y * 5280;
      default: 
        return y;
    };
  };
  toMi = (x, y) => {
    switch (true) {
      case x === "mm":
        return y * 6.21371 / 10000000;
      case x === "cm":
        return y * 6.21371 / 1000000;
      case x === "m":
        return y * 0.00062137;
      case x === "km":
        return y * 0.62137;
      case x === "inch":
        return y * 1.5782 / 100000;
      case x === "ft":
        return y * 0.0001893;
      default: 
        return y;
    };
  };

  tryConvert = (measurment, unit, convert) => {
    const input = parseFloat(measurment);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(unit, input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };

  render() {
    const scale = this.state.scale;
    const length = this.state.length;
    const tempOne = this.state.unitsSymbols[this.state.physicalQuantityNumber][this.state.firstUnit];
    const tempTwo = this.state.unitsSymbols[this.state.physicalQuantityNumber][this.state.secondUnit];

    const millimeters = 
      scale === "cm" ? this.tryConvert(length, "cm", this.toMm) : 
      scale === "m" ? this.tryConvert(length, "m", this.toMm) :
      scale === "km" ? this.tryConvert(length, "km", this.toMm) :
      scale === "inch" ? this.tryConvert(length, "inch", this.toMm) :
      scale === "ft" ? this.tryConvert(length, "ft", this.toMm) :
      scale === "mi" ? this.tryConvert(length, "mi", this.toMm) :
      length;;
    const centimeters =
      scale === "mm" ? this.tryConvert(length, "mm", this.toCm) : 
      scale === "m" ? this.tryConvert(length, "m", this.toCm) :
      scale === "km" ? this.tryConvert(length, "km", this.toCm) :
      scale === "inch" ? this.tryConvert(length, "inch", this.toCm) :
      scale === "ft" ? this.tryConvert(length, "ft", this.toCm) :
      scale === "mi" ? this.tryConvert(length, "mi", this.toCm) :
      length;
    const meters =
      scale === "mm" ? this.tryConvert(length, "mm", this.toM) : 
      scale === "cm" ? this.tryConvert(length, "cm", this.toM) :
      scale === "km" ? this.tryConvert(length, "km", this.toM) :
      scale === "inch" ? this.tryConvert(length, "inch", this.toM) :
      scale === "ft" ? this.tryConvert(length, "ft", this.toM) :
      scale === "mi" ? this.tryConvert(length, "mi", this.toM) :
      length;
    const kilometers =
      scale === "mm" ? this.tryConvert(length, "mm", this.toKm) : 
      scale === "cm" ? this.tryConvert(length, "cm", this.toKm) :
      scale === "m" ? this.tryConvert(length, "m", this.toKm) :
      scale === "inch" ? this.tryConvert(length, "inch", this.toKm) :
      scale === "ft" ? this.tryConvert(length, "ft", this.toKm) :
      scale === "mi" ? this.tryConvert(length, "mi", this.toKm) :
      length;
    const inches =
      scale === "mm" ? this.tryConvert(length, "mm", this.toInch) : 
      scale === "cm" ? this.tryConvert(length, "cm", this.toInch) :
      scale === "m" ? this.tryConvert(length, "m", this.toInch) :
      scale === "km" ? this.tryConvert(length, "km", this.toInch) :
      scale === "ft" ? this.tryConvert(length, "ft", this.toInch) :
      scale === "mi" ? this.tryConvert(length, "mi", this.toInch) :
      length;
    const feets =
      scale === "mm" ? this.tryConvert(length, "mm", this.toFt) : 
      scale === "cm" ? this.tryConvert(length, "cm", this.toFt) :
      scale === "m" ? this.tryConvert(length, "m", this.toFt) :
      scale === "km" ? this.tryConvert(length, "km", this.toFt) :
      scale === "inch" ? this.tryConvert(length, "inch", this.toFt) :
      scale === "mi" ? this.tryConvert(length, "mi", this.toFt) :
      length;
    const miles =
      scale === "mm" ? this.tryConvert(length, "mm", this.toMi) : 
      scale === "cm" ? this.tryConvert(length, "cm", this.toMi) :
      scale === "m" ? this.tryConvert(length, "m", this.toMi) :
      scale === "km" ? this.tryConvert(length, "km", this.toMi) :
      scale === "inch" ? this.tryConvert(length, "inch", this.toMi) :
      scale === "ft" ? this.tryConvert(length, "ft", this.toMi) :
      length;

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
                length={
                  tempOne === "mm" ? millimeters : 
                  tempOne === "cm" ? centimeters : 
                  tempOne === "m" ? meters : 
                  tempOne === "km" ? kilometers :
                  tempOne === "inch" ? inches :
                  tempOne === "ft" ? feets :
                  tempOne === "mi" ? miles :
                  millimeters}
                tryConvert={
                  tempOne === "mm" ? this.handleMillimetersChange : 
                  tempOne === "cm" ? this.handleCentimetersChange : 
                  tempOne === "m" ? this.handleMetersChange : 
                  tempOne === "km" ? this.handleKilometersChange :
                  tempOne === "inch" ? this.handleInchesChange :
                  tempOne === "ft" ? this.handleFeetsChange :
                  tempOne === "mi" ? this.handleMilesChange :
                  millimeters}
              />
            </div>
            <div className="col-6 text-center">
              <Convert 
                units={this.state.secondUnit}
                physicalQuantityNumber={this.state.physicalQuantityNumber}
                measurmentUnits={this.state.measurmentUnits}
                unitsSymbols={this.state.unitsSymbols}
                length={
                  tempTwo === "mm" ? millimeters : 
                  tempTwo === "cm" ? centimeters : 
                  tempTwo === "m" ? meters : 
                  tempTwo === "km" ? kilometers :
                  tempTwo === "inch" ? inches :
                  tempTwo === "ft" ? feets :
                  tempTwo === "mi" ? miles :
                  millimeters}
                tryConvert={
                  tempTwo === "mm" ? this.handleMillimetersChange : 
                  tempTwo === "cm" ? this.handleCentimetersChange : 
                  tempTwo === "m" ? this.handleMetersChange : 
                  tempTwo === "km" ? this.handleKilometersChange :
                  tempTwo === "inch" ? this.handleInchesChange :
                  tempTwo === "ft" ? this.handleFeetsChange :
                  tempTwo === "mi" ? this.handleMilesChange :
                  millimeters}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;