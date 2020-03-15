import React, { Component } from 'react';

export default class Convert extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.tryConvert(e.target.value);
    }

    render() {
        const { physicalQuantityNumber, units, unitsSymbols, value } = this.props;
        const i = +units;
        return (
            <div>
                <input 
                    type="number" 
                    onChange={this.handleChange} 
                    className="md-form form-control my-md-2 my-3" 
                    placeholder={unitsSymbols[physicalQuantityNumber][i]}
                    value={value} 
                />
            </div>
        );
    };
};