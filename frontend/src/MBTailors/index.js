import React, {Component} from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Context from "../context";
import Home from "../MBTailors/home";
import Order from "../MBTailors/order";


class MBTailors extends Component {
    render() {
        return (
            <Context.Consumer>
                {(ctx) => {
                    return (
                        <BrowserRouter>
                            <Switch>
                                <Route
                                    exact path="/"
                                    render = {() => <Redirect to = "/home"/>}
                                />

                                <Route
                                    extact path="/home"
                                    render = {() => <Home ctx = {ctx}/>}
                                />

                                <Route
                                    extact path="/order"
                                    render = {() => <Order ctx = {ctx}/>}
                                />
                            </Switch>
                        </BrowserRouter>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default MBTailors;