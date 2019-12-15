import React from 'react';
import ErrorBoundary from './ui/ErrorBoundary';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ErrorBoundary>
                <div>sample</div>
            </ErrorBoundary>
        );
    }
}

