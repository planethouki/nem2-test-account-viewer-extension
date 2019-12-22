import React from 'react';
import ErrorBoundary from './ui/ErrorBoundary';
import Account from './ui/Account';
import Settings from './ui/Settings';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <ErrorBoundary>
                    <div className="d-flex justify-content-between align-items-center border-bottom">
                        <Link className="d-inline-block" to="/" style={{width: '50px'}}>
                            <img src="nem_logo_WEB.png" className="w-100" alt="symbol"/>
                        </Link>
                        <div>nem2-test-account-viewer</div>
                        <div className="text-center" style={{width: '50px'}}>
                            <Link className="btn btn-light rounded-pill" to="/settings">
                                &#x2699;
                            </Link>
                        </div>
                    </div>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Switch>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/">
                            <Account />
                        </Route>
                    </Switch>
                </ErrorBoundary>
            </Router>
        );
    }
}

