import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FaList } from 'react-icons/fa';
import Home from '../Pages/Home';
import Events from '../Pages/Events';
import Resources from '../Pages/Resources';
import Explore from '../Pages/Explore';
import Entertainment from '../Pages/Entertainment';
import Advice from '../Pages/Entertainment';
import Navbar from './Navbar';

export default class Routes extends Component {
    state = { }
    render() {
        return (
            <div className='app'>
                <Navbar icon={<FaList />} />
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
                        <Route exact path='/advice'>
                            <Advice />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}