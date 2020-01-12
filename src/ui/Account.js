/* global backgroundFacade */
import React from 'react';
import { Button, Overlay, Tooltip } from 'react-bootstrap';
import { nemFacade as nem } from '../nemFacade';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
        this.address = backgroundFacade.methods.getAddress();
        this.endPoint = backgroundFacade.methods.getEndPoint();
        this.hexMosaicId = backgroundFacade.methods.getHexMosaicId();
        this.balanceInterval = null;
        this.transactionsInterval = null;
        this.state = {
            balance: '-',
            transactions: [],
            showCopyAddressNotify: false,
            showCopyEndPointNotify: false
        };
        this.refCopyAddressNotify = React.createRef();
        this.refCopyEndPointNotify = React.createRef();
        this.onClickCopyAddress = this.onClickCopyAddress.bind(this);
        this.onClickCopyEndPoint = this.onClickCopyEndPoint.bind(this);
    }

    componentDidMount() {
        this.balanceInterval = setInterval(() => {
            this.setState({
                balance: backgroundFacade.methods.getBalance().toString()
            })
        }, 1000)
        this.transactionsInterval = setInterval(() => {
            this.setState({
                transactions: backgroundFacade.methods.getTransactions().slice(0, 4)
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.balanceInterval);
        clearInterval(this.transactionsInterval);
    }

    onClickCopy(elementId) {
        const elm = document.getElementById(elementId);
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(elm);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges()
    }

    onClickCopyAddress(event) {
        this.onClickCopy('copy-address');
        this.setState(state => {
            return { showCopyAddressNotify: true }
        })
        setTimeout(() => {
            this.setState(state => {
                return { showCopyAddressNotify: false }
            })
        }, 5000)
    }
    onClickCopyEndPoint(event) {
        this.onClickCopy('copy-end-point');
        this.setState(state => {
            return { showCopyEndPointNotify: true }
        })
        setTimeout(() => {
            this.setState(state => {
                return { showCopyEndPointNotify: false }
            })
        }, 5000)
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
                        ref={this.refCopyAddressNotify}
                    >
                        <span className="text-address" style={{fontSize: '80%'}}>{this.address}</span>
                    </button>
                    <Overlay
                        target={this.refCopyAddressNotify.current}
                        show={this.state.showCopyAddressNotify}
                        placement="bottom">
                        {props => (
                            <Tooltip id="overlay-copy-address-notify" {...props}>
                                Copied!
                            </Tooltip>
                        )}
                    </Overlay>
                </div>
                <div className="px-3 mt-4">
                    <div className="card">
                        <div className="card-body pt-0 pb-4">
                            <div className="card-title">
                                <span style={{fontSize: '80%'}}>Balance</span>
                            </div>
                            <div className="card-text d-flex justify-content-between align-items-baseline px-3">
                                <h5>{this.state.balance}</h5>
                                <div>nem.xem</div>
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
                                        <div className="text-truncate" style={{fontSize: '50%'}} key={tx.id}>{tx.hash}</div>
                                    )
                                })}
                            </div>
                            <div className="text-right d-none">
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
                        onClick={this.onClickCopyEndPoint}
                        ref={this.refCopyEndPointNotify}
                    >
                        <small className="font-weight-bold">{this.endPoint}</small>
                    </button>
                    <Overlay
                        target={this.refCopyEndPointNotify.current}
                        show={this.state.showCopyEndPointNotify}
                        placement="bottom">
                        {props => (
                            <Tooltip id="overlay-copy-end-point-notify" {...props}>
                                Copied!
                            </Tooltip>
                        )}
                    </Overlay>
                </div>
                <div className="text-center px-3 mt-3">
                    <div className="alert alert-danger font-weight-bold">experimental use only</div>
                </div>

                <div id="copy-address" className="text-address text-center text-white" style={{fontSize: '10%'}}>
                    {this.address}
                </div>
                <div id="copy-end-point" className="text-address text-center text-white" style={{fontSize: '10%'}}>
                    {this.endPoint}
                </div>
            </div>
        );
    }
}
