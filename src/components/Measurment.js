import React, { Component } from 'react';

export default class Measurment extends Component {
    render() {
        const { physicalQuantityNumber, selectPhysicalQuantityNumber, physicalQuantities} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <select value={physicalQuantityNumber} onChange={selectPhysicalQuantityNumber.bind(this)} className="mdb-select md-form form-control my-md-2 my-3">
                            {physicalQuantities.map((item, index) => {
			                    return <option key={index} value={index}>{item}</option>;
		                        })
                            }
                        </select>
                    </div>
                </div>
            </div>
        );
    };
};