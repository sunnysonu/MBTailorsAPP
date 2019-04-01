import React, {Component} from "react";
import {withRouter} from 'react-router';

class Home extends Component {
    render() {
        return (
            <center>
                <h1>HOME</h1>
            </center>
        )
    }
}

export default withRouter(Home);