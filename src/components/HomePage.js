import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if( this.props.login) {
            return (
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Hello {this.props.username}</h1>
                        <p class="lead">Some Fancy Text</p>
                    </div>
                </div>

            )
        }
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Home</h1>
                    <p class="lead">Some Fancy Text</p>
                </div>
            </div>
        );
    }
}

export default HomePage;