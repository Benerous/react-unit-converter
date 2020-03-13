import React, { Component } from 'react';

export default class Quantity extends Component {
    render() {
        const { physicalQuantityNumber, firstUnit, secondUnit, measurmentUnits, selectFirstPhysicalQuantity, selectSecondPhysicalQuantity } = this.props;
        const number = +physicalQuantityNumber;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 text-center">
                        <select value={firstUnit} onChange={selectFirstPhysicalQuantity.bind(this)} className="mdb-select md-form form-control my-md-2 my-3">
                            {measurmentUnits[number].map((item, index) => {
                                return (
                                    <option key={index} value={index}>{item}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col-6 text-center">
                        <select value={secondUnit} onChange={selectSecondPhysicalQuantity.bind(this)} className="mdb-select md-form form-control my-md-2 my-3">
                            {measurmentUnits[number].map((item, index) => {
                                return (
                                    <option key={index} value={index}>{item}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        );
    };
};
