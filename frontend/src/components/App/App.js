// To run the app type 'py ./manage.py runserver' on a py terminal AND 'npm run dev' on a node terminal (the node command will ran on /frontend)

import React, { Component } from 'react';
import { render } from 'react-dom';
import Routes from './Routes.js';

// This component is linked to the index.html file in 'templates/frontend and is always rendered inside the div with id="app"

export default class App extends Component {
    state = { }
    render() {
        return (
            <div>
                <Routes />
            </div>
        )
    }
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);

