import React, { Component } from 'react';

export default class Convert extends Component {
    render() {
        const { physicalQuantityNumber, units, unitsSymbols, convertTo } = this.props;
        const i = +units;
        return (
            <div>
                <input onChange={convertTo} className="md-form form-control my-md-2 my-3" placeholder={unitsSymbols[physicalQuantityNumber][i]}></input>
            </div>
        );
    };
};