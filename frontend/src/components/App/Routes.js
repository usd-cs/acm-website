import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from '../Pages/Home';
import Events from '../Pages/Events';
import Resources from '../Pages/Resources';
import Explore from '../Pages/Explore';
import Entertainment from '../Pages/Entertainment';
<<<<<<< HEAD
=======
import Advice from '../Pages/Advice';
import Test from '../Pages/Test';
>>>>>>> 1f3393e5450d56a8d995e38248036bcd1dd61b05

export default class Routes extends Component {
    state = { }
    render() {
        return (
            <div className='app'>
                <Navbar />
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/events'>
                            <Events />
                        </Route>
                        <Route exact path='/resources'>
                            <Resources />
                        </Route>
                        <Route exact path='/explore'>
                            <Explore />
                        </Route>
                        <Route exact path='/entertainment'>
                            <Entertainment />
                        </Route>
<<<<<<< HEAD
=======
                        <Route exact path='/advice'>
                            <Advice />
                        </Route>
                        <Route exact path='/test'>
                            <Test />
                        </Route>

>>>>>>> 1f3393e5450d56a8d995e38248036bcd1dd61b05
                    </Switch>
                </Router>
            </div>
        )
    }
}