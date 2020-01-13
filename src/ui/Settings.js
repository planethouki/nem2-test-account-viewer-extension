/* global background */

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

export default class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.inputAddress = background.getAddress();
        this.inputEndPoint = background.getEndPoint();
        this.inputHexMosaicId = background.getHexMosaicId();
        this.setAddress = this.setAddress.bind(this);
        this.setEndPoint = this.setEndPoint.bind(this);
        this.setHexMosaicId = this.setHexMosaicId.bind(this);
    }

    setAddress() {
        background.setAddress(this.inputAddress)
    }
    setEndPoint() {
        background.setEndPoint(this.inputEndPoint)
    }
    setHexMosaicId() {
        background.setHexMosaicId(this.inputHexMosaicId)
    }

    render() {
        return (
            <div className="p-3">
                <label htmlFor="basic-address">Address</label>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Address"
                        aria-label="Address"
                        aria-describedby="basic-address"
                        id="basic-address"
                        defaultValue={this.inputAddress}
                        onChange={(event) => this.inputAddress = event.target.value}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" onClick={this.setAddress}>Save</Button>
                    </InputGroup.Append>
                </InputGroup>

                <label htmlFor="basic-end-point">End Point</label>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="End Point"
                        aria-label="End Point"
                        aria-describedby="basic-end-point"
                        id="basic-end-point"
                        defaultValue={this.inputEndPoint}
                        onChange={(event) => this.inputEndPoint = event.target.value}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" onClick={this.setEndPoint}>Save</Button>
                    </InputGroup.Append>
                </InputGroup>

                <label htmlFor="basic-hex-mosaic-id">Mosaic ID</label>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Mosaic ID"
                        aria-label="Mosaic ID"
                        aria-describedby="basic-hex-mosaic-id"
                        id="basic-hex-mosaic-id"
                        defaultValue={this.inputHexMosaicId}
                        onChange={(event) => this.inputHexMosaicId = event.target.value}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" onClick={this.setHexMosaicId}>Save</Button>
                    </InputGroup.Append>
                </InputGroup>
                <div>
                    <Link to="/" className="btn btn-secondary">Back</Link>
                </div>
            </div>
        )
    }
}
