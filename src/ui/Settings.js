import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import background from '../backgroundFacade';

export default class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.inputAddress = background.getAddress().pretty();
        this.inputEndPoint = background.getEndPoint();
        this.setAddress = this.setAddress.bind(this);
        this.setEndPoint = this.setEndPoint.bind(this)
    }

    setAddress() {
        console.log("setAddress");
        background.setAddress(this.inputAddress)
    }
    setEndPoint() {
        console.log("setEndPoint");
        background.setEndPoint(this.inputEndPoint)
    }

    render() {
        return (
            <div className="p-3">
                <div>
                    <Link to="/" className="btn btn-secondary">Back</Link>
                </div>
                <label htmlFor="basic-address">Address</label>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="SCA7ZS-2B7DEE-BGU3TH-SILYHC-RUR32Y-YE55ZB-LYA2"
                        aria-label="address"
                        aria-describedby="basic-address"
                        id="basic-address"
                        defaultValue={background.getAddress().pretty()}
                        onChange={(event) => this.inputAddress = event.target.value}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" onClick={this.setAddress}>Save</Button>
                    </InputGroup.Append>
                </InputGroup>
                <label htmlFor="basic-end-point">End Point</label>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-end-point"
                        id="basic-end-point"
                        defaultValue={background.getEndPoint()}
                        onChange={(event) => this.inputEndPoint = event.target.value}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" onClick={this.setEndPoint}>Save</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}
