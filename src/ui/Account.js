import React from 'react';
import { Button, Overlay, Tooltip } from 'react-bootstrap';
import background from '../backgroundFacade';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: '0',
            transactions: [],
            address: background.getAddress().pretty(),
            endPoint: background.getEndPoint()
        };
        this.onClickCopyAddress = this.onClickCopyAddress.bind(this)
    }

    onClickCopyAddress(event) {
        const elm = document.getElementById('copy-address');
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(elm);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges()
    }

    render() {
        return (
            <div>
                <div className="text-center px-5">
                    <button
                        type="button"
                        className="btn btn-light"
                        style={{lineHeight: 1}}
                        onClick={this.onClickCopyAddress}
                    >
                        <span className="text-address" style={{fontSize: '80%'}}>{this.state.address}</span>
                    </button>
                </div>
                <div className="px-3 mt-4">
                    <div className="card">
                        <div className="card-body pt-0 pb-4">
                            <div className="card-title">
                                <span style={{fontSize: '80%'}}>Balance</span>
                            </div>
                            <div className="card-text d-flex justify-content-between align-items-baseline px-3">
                                <h5>{this.state.balance}</h5>
                                <div>xem</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-3 mt-3">
                    <div className="card">
                        <div className="card-body pt-0 pb-2">
                            <div className="card-title">
                                <span style={{fontSize: '80%'}}>Transactions</span>
                            </div>
                            <div className="card-text px-2 transactions-container">
                                {this.state.transactions.map((tx) => {
                                    return (
                                        <div className="text-truncate" style={{fontSize: '50%'}} key={tx}>{tx}</div>
                                    )
                                })}
                            </div>
                            <div className="text-right">
                                <a href="#" style={{fontSize: '80%'}} onClick={this.onClickMoreTx}>more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-3 dropup">
                    <button
                        type="button"
                        className="btn btn-light rounded-pill btn-sm border"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <small className="font-weight-bold">{this.state.endPoint}</small>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <button className="dropdown-item" type="button">https://elephant3.48gh23s.xyz:3001</button>
                    </div>
                </div>
                <div className="text-center px-3 mt-3">
                    <div className="alert alert-danger font-weight-bold">experimental use only</div>
                </div>

                <div id="copy-address" className="text-address text-center text-white" style={{fontSize: '10%'}}>
                    {this.state.address}
                </div>
            </div>
        );
    }
}
