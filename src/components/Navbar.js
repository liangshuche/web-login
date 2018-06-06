import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        }

        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(ev) {
        this.props.socket.emit('LOGOUT');
        this.setState({redirect: true});
    }

    render() {
        if ( this.props.login ) {
            return (
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to='/' style={{ textDecoration: 'none', color: 'white'}}><a class="navbar-brand">Foody</a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to='/'><a class="nav-item nav-link" >Home</a></Link>
                        <Link to='/about'><a class="nav-item nav-link" >About</a></Link>
                        <Link to='/premium'><a class="nav-item nav-link" >Premium</a></Link>
                    </div>
                    <div class='navbar-nav ml-auto'>
                        <Link to='/'><a class="nav-item nav-link" onClick={this.handleLogout} >Logout</a></Link>
                    </div>
                </div>
              </nav>
            );
        }
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to='/' style={{ textDecoration: 'none', color: 'white'}}><a class="navbar-brand">Foody</a></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to='/'><a class="nav-item nav-link" >Home</a></Link>
                    <Link to='/about'><a class="nav-item nav-link" >About</a></Link>
                    <Link to='/premium'><a class="nav-item nav-link" >Premium</a></Link>
                </div>
                <div class='navbar-nav ml-auto'>
                    <Link to='/login'><a class="nav-item nav-link" >Login</a></Link>
                </div>
            </div>
          </nav>
        );
    }
}

export default NavBar;