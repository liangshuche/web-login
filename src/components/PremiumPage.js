import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class PremiumPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if( this.props.login) {
            return (
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Premium</h1>
                        <p class="lead">Some Premium Content</p>
                    </div>
            </div>
            )
        }
        return (
            <Redirect push to='/login'/>
        );
    }
}

export default PremiumPage;