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
        const { physicalQuantityNumber, units, unitsSymbols, length} = this.props;
        const i = +units;
        return (
            <div>
                <input 
                    type="text" 
                    onChange={this.handleChange} 
                    className="md-form form-control my-md-2 my-3" 
                    placeholder={unitsSymbols[physicalQuantityNumber][i]}
                    value={length} 
                />
            </div>
        );
    };
};