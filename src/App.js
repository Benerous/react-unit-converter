import React, { Component } from 'react';
import './App.css';
import Measurment from './components/Measurment';
import Quantity from './components/Quantity';
import Convert from './components/Convert';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor(props) {
    super(props);

    //Length

    this.handleMillimetersChange = this.handleMillimetersChange.bind(this);
    this.handleCentimetersChange = this.handleCentimetersChange.bind(this);
    this.handleMetersChange = this.handleMetersChange.bind(this);
    this.handleKilometersChange = this.handleKilometersChange.bind(this);
    this.handleInchesChange = this.handleInchesChange.bind(this);
    this.handleFeetsChange = this.handleFeetsChange.bind(this);
    this.handleMilesChange = this.handleMilesChange.bind(this);

    // Temperature

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleKelvinChange = this.handleKelvinChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleRankineChange = this.handleRankineChange.bind(this);

    // Mass

    this.handleMicrogramsChange = this.handleMicrogramsChange.bind(this);
    this.handleMilligramsChange = this.handleMilligramsChange.bind(this);
    this.handleGramsChange = this.handleGramsChange.bind(this);
    this.handleKilogramsChange = this.handleKilogramsChange.bind(this);
    this.handlePoundsChange = this.handlePoundsChange.bind(this);
    this.handleTonsChange = this.handleTonsChange.bind(this);

    this.state = {
      physicalQuantityNumber: 0,
      firstUnit: 0,
      secondUnit: 0,
      physicalQuantities: ["Length", "Temperature", "Mass"], // ["Length", "Temperature", "Mass", "Time", "Area"],
      measurmentUnits: [
        ["Millimeters", "Centimeters", "Meters", "Kilometers", "Inches", "Feet", "Miles"],
        ["degrees Celsius", "degrees Kelvin", "degrees Fahrenheit", "degrees Rankine"],
        ["Micrograms", "Milligrams", "Grams", "Kilograms", "Pounds", "Tons"],
        // ["Nanoseconds", "Microseconds", "Milliseconds", "Seconds", "Minutes", "Hours", "Days", "Weeks", "Months", "Years"],
        // ["Square Millimeters", "Square Centimeters", "Square Meters", "Hectares", "Square Kilometers", "Square Inches", "Square Feet", "Square Miles"]
      ],
      unitsSymbols: [
        ["mm", "cm", "m", "km", "inch", "ft", "mi"],
        ["C", "K", "F", "R"],
        ["mcg", "mg", "g", "kg", "lb", "t"],
        // ["ns", "mcs", "ms", "sec", "min", "hour", "day", "week", "month", "year"],
        // ["mm2", "cm2", "m2", "ha2", "km2", "inch2", "ft2", "mi2"]
      ],
      value: '',
      scale: ''
    };
  };

  selectPhysicalQuantityNumber = (e) => {
    this.setState({
      physicalQuantityNumber: +(e.target.value),
      value: '',
      firstUnit: 0,
      secondUnit: 0
    });
    e.preventDefault();
  };

  selectFirstPhysicalQuantity = (e) => {
    this.setState({
      firstUnit: +(e.target.value),
      value: ''
    });
    e.preventDefault();
  };

  selectSecondPhysicalQuantity = (e) => {
    this.setState({
      secondUnit: +(e.target.value),
      value: ''
    });
    e.preventDefault();
  };

  // Length

  handleMillimetersChange(value) {
    this.setState({scale: "mm", value});
  };
  handleCentimetersChange(value) {
    this.setState({scale: "cm", value});
  };
  handleMetersChange(value) {
    this.setState({scale: "m", value});
  };
  handleKilometersChange(value) {
    this.setState({scale: "km", value});
  };
  handleInchesChange(value) {
    this.setState({scale: "inch", value});
  };
  handleFeetsChange(value) {
    this.setState({scale: "ft", value});
  };
  handleMilesChange(value) {
    this.setState({scale: "mi", value});
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

  //Temperature

  handleCelsiusChange(value) {
    this.setState({scale: "C", value});
  };
  handleKelvinChange(value) {
    this.setState({scale: "K", value});
  };
  handleFahrenheitChange(value) {
    this.setState({scale: "F", value});
  };
  handleRankineChange(value) {
    this.setState({scale: "R", value});
  };
  toC = (x, y) => {
    switch (true) {
      case x === "K":
        return y - 273.15;
      case x === "F":
        return (y - 32) * 5/9;
      case x === "R":
        return (y - 491.67) * 5/9;
      default: 
        return y;
    };
  };
  toK = (x, y) => {
    switch (true) {
      case x === "C":
        return y + 273.15;
      case x === "F":
        return y + 254.92;
      case x === "R":
        return y * 0.5555;
      default: 
        return y;
    };
  };
  toF = (x, y) => {
    switch (true) {
      case x === "C":
        return (y * 1.8) + 32;
      case x === "K":
        return y - 459.87;
      case x === "R":
        return y + 459.67;
      default: 
        return y;
    };
  };
  toR = (x, y) => {
    switch (true) {
      case x === "C":
        return (y + 273.15) * 9/5;
      case x === "K":
        return y * 9/5;
      case x === "F":
        return y + 459.67;
      default: 
        return y;
    };
  };
  
  // Mass

  handleMicrogramsChange(value) {
    this.setState({scale: "mcg", value});
  };
  handleMilligramsChange(value) {
    this.setState({scale: "mg", value});
  };
  handleGramsChange(value) {
    this.setState({scale: "g", value});
  };
  handleKilogramsChange(value) {
    this.setState({scale: "kg", value});
  };
  handlePoundsChange(value) {
    this.setState({scale: "lb", value});
  };
  handleTonsChange(value) {
    this.setState({scale: "t", value});
  };
  toMcg = (x, y) => {
    switch (true) {
      case x === "mg":
        return y * 1000;
      case x === "g":
        return y * 1000000;
      case x === "kg":
        return y * 1000000000;
      case x === "lb":
        return y * 453592370;
      case x === "t":
        return y * 1000000000000;
      default: 
        return y;
    };
  };
  toMg = (x, y) => {
    switch (true) {
      case x === "mcg":
        return y * 0.001;
      case x === "g":
        return y * 1000;
      case x === "kg":
        return y * 1000000;
      case x === "lb":
        return y * 453592.37;      
      case x === "t":
        return y * 1000000000;     
      default: 
        return y;
    };
  };
  toG = (x, y) => {
    switch (true) {
      case x === "mcg":
        return y * 0.000001;
      case x === "mg":
        return y * 0.001;
      case x === "kg":
        return y * 1000;
      case x === "lb":
        return y * 453.5923;
      case x === "t":
        return y * 1000000;
      default: 
        return y;
    };
  };
  toKg = (x, y) => {
    switch (true) {
      case x === "mcg":
        return y * 0.000000001;
      case x === "mg":
        return y * 0.000001;
      case x === "g":
        return y * 0.001;
      case x === "lb":
        return y * 0.4535;
      case x === "t":
        return y * 1000;
      default: 
        return y;
    };
  };
  toLb = (x, y) => {
    switch (true) {
      case x === "mcg":
        return y * 2.2 * 0.000000001;
      case x === "mg":
        return y * 2.2 * 0.000001;
      case x === "g":
        return y * 0.0022;
      case x === "kg":
        return y * 2.2046;
      case x === "t":
        return y * 2204.6226;
      default: 
        return y;
    };
  };
  toT = (x, y) => {
    switch (true) {
      case x === "mcg":
        return y * 0.000000000001;
      case x === "mg":
        return y * 0.000000001;
      case x === "g":
        return y * 0.000001;
      case x === "kg":
        return y * 0.001;
      case x === "lb":
        return y * 0.000453;
      default: 
        return y;
    };
  };

  //General Convertization

  tryConvert = (measurment, unit, convert) => {
    const input = parseFloat(measurment);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(unit, input);
    const rounded = Math.round(output * 1000000) / 1000000;
    return rounded.toString();
  };

  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const tempOne = this.state.unitsSymbols[this.state.physicalQuantityNumber][this.state.firstUnit];
    const tempTwo = this.state.unitsSymbols[this.state.physicalQuantityNumber][this.state.secondUnit];

    // Length

    const millimeters = 
      scale === "cm" ? this.tryConvert(value, "cm", this.toMm) : 
      scale === "m" ? this.tryConvert(value, "m", this.toMm) :
      scale === "km" ? this.tryConvert(value, "km", this.toMm) :
      scale === "inch" ? this.tryConvert(value, "inch", this.toMm) :
      scale === "ft" ? this.tryConvert(value, "ft", this.toMm) :
      scale === "mi" ? this.tryConvert(value, "mi", this.toMm) :
      value;
    const centimeters =
      scale === "mm" ? this.tryConvert(value, "mm", this.toCm) : 
      scale === "m" ? this.tryConvert(value, "m", this.toCm) :
      scale === "km" ? this.tryConvert(value, "km", this.toCm) :
      scale === "inch" ? this.tryConvert(value, "inch", this.toCm) :
      scale === "ft" ? this.tryConvert(value, "ft", this.toCm) :
      scale === "mi" ? this.tryConvert(value, "mi", this.toCm) :
      value;
    const meters =
      scale === "mm" ? this.tryConvert(value, "mm", this.toM) : 
      scale === "cm" ? this.tryConvert(value, "cm", this.toM) :
      scale === "km" ? this.tryConvert(value, "km", this.toM) :
      scale === "inch" ? this.tryConvert(value, "inch", this.toM) :
      scale === "ft" ? this.tryConvert(value, "ft", this.toM) :
      scale === "mi" ? this.tryConvert(value, "mi", this.toM) :
      value;
    const kilometers =
      scale === "mm" ? this.tryConvert(value, "mm", this.toKm) : 
      scale === "cm" ? this.tryConvert(value, "cm", this.toKm) :
      scale === "m" ? this.tryConvert(value, "m", this.toKm) :
      scale === "inch" ? this.tryConvert(value, "inch", this.toKm) :
      scale === "ft" ? this.tryConvert(value, "ft", this.toKm) :
      scale === "mi" ? this.tryConvert(value, "mi", this.toKm) :
      value;
    const inches =
      scale === "mm" ? this.tryConvert(value, "mm", this.toInch) : 
      scale === "cm" ? this.tryConvert(value, "cm", this.toInch) :
      scale === "m" ? this.tryConvert(value, "m", this.toInch) :
      scale === "km" ? this.tryConvert(value, "km", this.toInch) :
      scale === "ft" ? this.tryConvert(value, "ft", this.toInch) :
      scale === "mi" ? this.tryConvert(value, "mi", this.toInch) :
      value;
    const feets =
      scale === "mm" ? this.tryConvert(value, "mm", this.toFt) : 
      scale === "cm" ? this.tryConvert(value, "cm", this.toFt) :
      scale === "m" ? this.tryConvert(value, "m", this.toFt) :
      scale === "km" ? this.tryConvert(value, "km", this.toFt) :
      scale === "inch" ? this.tryConvert(value, "inch", this.toFt) :
      scale === "mi" ? this.tryConvert(value, "mi", this.toFt) :
      value;
    const miles =
      scale === "mm" ? this.tryConvert(value, "mm", this.toMi) : 
      scale === "cm" ? this.tryConvert(value, "cm", this.toMi) :
      scale === "m" ? this.tryConvert(value, "m", this.toMi) :
      scale === "km" ? this.tryConvert(value, "km", this.toMi) :
      scale === "inch" ? this.tryConvert(value, "inch", this.toMi) :
      scale === "ft" ? this.tryConvert(value, "ft", this.toMi) :
      value;

    // Temperature

    const celsius = 
      scale === "K" ? this.tryConvert(value, "K", this.toC) :
      scale === "F" ? this.tryConvert(value, "F", this.toC) :
      scale === "R" ? this.tryConvert(value, "R", this.toC) :
      value;
    const kelvin = 
      scale === "C" ? this.tryConvert(value, "C", this.toK) :
      scale === "F" ? this.tryConvert(value, "F", this.toK) :
      scale === "R" ? this.tryConvert(value, "R", this.toK) :
      value;
    const fahrenheit = 
      scale === "C" ? this.tryConvert(value, "C", this.toF) :
      scale === "K" ? this.tryConvert(value, "K", this.toF) :
      scale === "R" ? this.tryConvert(value, "R", this.toF) :
      value;
    const rankine = 
      scale === "C" ? this.tryConvert(value, "C", this.toR) :
      scale === "K" ? this.tryConvert(value, "K", this.toR) :
      scale === "F" ? this.tryConvert(value, "F", this.toR) :
      value;

    // Mass

    const micrograms = 
      scale === "mg" ? this.tryConvert(value, "mg", this.toMcg) : 
      scale === "g" ? this.tryConvert(value, "g", this.toMcg) :
      scale === "kg" ? this.tryConvert(value, "kg", this.toMcg) :
      scale === "lb" ? this.tryConvert(value, "lb", this.toMcg) :
      scale === "t" ? this.tryConvert(value, "t", this.toMcg) :
      value;

    const milligrams = 
      scale === "mcg" ? this.tryConvert(value, "mcg", this.toMg) : 
      scale === "g" ? this.tryConvert(value, "g", this.toMg) :
      scale === "kg" ? this.tryConvert(value, "kg", this.toMg) :
      scale === "lb" ? this.tryConvert(value, "lb", this.toMg) :
      scale === "t" ? this.tryConvert(value, "t", this.toMg) :
      value;

    const grams = 
      scale === "mcg" ? this.tryConvert(value, "mcg", this.toG) : 
      scale === "mg" ? this.tryConvert(value, "mg", this.toG) :
      scale === "kg" ? this.tryConvert(value, "kg", this.toG) :
      scale === "lb" ? this.tryConvert(value, "lb", this.toG) :
      scale === "t" ? this.tryConvert(value, "t", this.toG) :
      value;

    const kilograms = 
      scale === "mcg" ? this.tryConvert(value, "mcg", this.toKg) : 
      scale === "mg" ? this.tryConvert(value, "mg", this.toKg) :
      scale === "g" ? this.tryConvert(value, "g", this.toKg) :
      scale === "lb" ? this.tryConvert(value, "lb", this.toKg) :
      scale === "t" ? this.tryConvert(value, "t", this.toKg) :
      value;

    const pounds = 
      scale === "mcg" ? this.tryConvert(value, "mcg", this.toLb) : 
      scale === "mg" ? this.tryConvert(value, "mg", this.toLb) :
      scale === "g" ? this.tryConvert(value, "g", this.toLb) :
      scale === "kg" ? this.tryConvert(value, "kg", this.toLb) :
      scale === "t" ? this.tryConvert(value, "t", this.toLb) :
      value;

    const tons = 
      scale === "mcg" ? this.tryConvert(value, "mcg", this.toT) : 
      scale === "mg" ? this.tryConvert(value, "mg", this.toT) :
      scale === "g" ? this.tryConvert(value, "g", this.toT) :
      scale === "kg" ? this.tryConvert(value, "kg", this.toT) :
      scale === "lb" ? this.tryConvert(value, "lb", this.toT) :
      value;
    
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
          secondUnit={this.state.secondUnit}
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
                value={
                  tempOne === "mm" ? millimeters : 
                  tempOne === "cm" ? centimeters : 
                  tempOne === "m" ? meters : 
                  tempOne === "km" ? kilometers :
                  tempOne === "inch" ? inches :
                  tempOne === "ft" ? feets :
                  tempOne === "mi" ? miles : 
                  tempOne === "C" ? celsius :
                  tempOne === "K" ? kelvin :
                  tempOne === "F" ? fahrenheit :
                  tempOne === "R" ? rankine :
                  tempOne === "mcg" ? micrograms :
                  tempOne === "mg" ? milligrams : 
                  tempOne === "g" ? grams :
                  tempOne === "kg" ? kilograms :
                  tempOne === "lb" ? pounds :
                  tempOne === "t" ? tons :
                  undefined}
                tryConvert={
                  tempOne === "mm" ? this.handleMillimetersChange : 
                  tempOne === "cm" ? this.handleCentimetersChange : 
                  tempOne === "m" ? this.handleMetersChange : 
                  tempOne === "km" ? this.handleKilometersChange :
                  tempOne === "inch" ? this.handleInchesChange :
                  tempOne === "ft" ? this.handleFeetsChange :
                  tempOne === "mi" ? this.handleMilesChange :
                  tempOne === "C" ? this.handleCelsiusChange :
                  tempOne === "K" ? this.handleKelvinChange :
                  tempOne === "F" ? this.handleFahrenheitChange :
                  tempOne === "R" ? this.handleRankineChange :
                  tempOne === "mcg" ? this.handleMicrogramsChange :
                  tempOne === "mg" ? this.handleMilligramsChange :
                  tempOne === "g" ? this.handleGramsChange :
                  tempOne === "kg" ? this.handleKilogramsChange :
                  tempOne === "lb" ? this.handlePoundsChange :
                  tempOne === "t" ? this.handleTonsChange :
                  undefined}
              />
            </div>
            <div className="col-6 text-center">
              <Convert 
                units={this.state.secondUnit}
                physicalQuantityNumber={this.state.physicalQuantityNumber}
                measurmentUnits={this.state.measurmentUnits}
                unitsSymbols={this.state.unitsSymbols}
                value={
                  tempTwo === "mm" ? millimeters : 
                  tempTwo === "cm" ? centimeters : 
                  tempTwo === "m" ? meters : 
                  tempTwo === "km" ? kilometers :
                  tempTwo === "inch" ? inches :
                  tempTwo === "ft" ? feets :
                  tempTwo === "mi" ? miles :
                  tempTwo === "C" ? celsius :
                  tempTwo === "K" ? kelvin :
                  tempTwo === "F" ? fahrenheit :
                  tempTwo === "R" ? rankine :
                  tempTwo === "mcg" ? micrograms :
                  tempTwo === "mg" ? milligrams : 
                  tempTwo === "g" ? grams :
                  tempTwo === "kg" ? kilograms :
                  tempTwo === "lb" ? pounds :
                  tempTwo === "t" ? tons :
                  undefined}
                tryConvert={
                  tempTwo === "mm" ? this.handleMillimetersChange : 
                  tempTwo === "cm" ? this.handleCentimetersChange : 
                  tempTwo === "m" ? this.handleMetersChange : 
                  tempTwo === "km" ? this.handleKilometersChange :
                  tempTwo === "inch" ? this.handleInchesChange :
                  tempTwo === "ft" ? this.handleFeetsChange :
                  tempTwo === "mi" ? this.handleMilesChange :
                  tempTwo === "C" ? this.handleCelsiusChange :
                  tempTwo === "K" ? this.handleKelvinChange :
                  tempTwo === "F" ? this.handleFahrenheitChange :
                  tempTwo === "R" ? this.handleRankineChange :
                  tempTwo === "mcg" ? this.handleMicrogramsChange :
                  tempTwo === "mg" ? this.handleMilligramsChange :
                  tempTwo === "g" ? this.handleGramsChange :
                  tempTwo === "kg" ? this.handleKilogramsChange :
                  tempTwo === "lb" ? this.handlePoundsChange :
                  tempTwo === "t" ? this.handleTonsChange :
                  undefined}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;