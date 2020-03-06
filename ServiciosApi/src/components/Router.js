import React, { Component } from 'react'
import {Browser, Switch, Router} from "react-router-dom"

export default class Router extends Component {
    render() {
        return (
            <Browser>
            <Switch>
                <Router exact path="" >

                </Router>
            </Switch>
            </Browser>
            
        )
    }
}
