import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import io from 'socket.io-client';
import './App.css';

import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import PremiumPage from './components/PremiumPage';
import LogoutPage from './components/LogoutPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      username: '',
    };

    this.socket = io('localhost:5000');

    this.socket.on('RECEIVE_LOGIN', (data) => {
      this.setState({
        login: true,
        username: data,
      });
    });

    this.socket.on('RECEIVE_LOGOUT', () => {
      this.setState({
        login: false,
        username: '',
      });
    });
  }


  render() {
    const MyNavBar = (props) => {
      return (
        <NavBar login={this.state.login} socket={this.socket}/>
      );
    }
    const MyLoginPage = (props) => {
      return (
        <LoginPage socket={this.socket}/>
      );
    } 
    const MyRegisterPage = (props) => {
      return (
        <RegisterPage socket={this.socket}/>
      );
    }
    const MyHomePage = (props) => {
      return (
        <HomePage login={this.state.login} username={this.state.username}/>
      );
    }

    const MyPremiumPage = (props) => {
      return (
        <PremiumPage login={this.state.login}/>
      );
    }

    return (
      <BrowserRouter>
        <div>
          <Route path='/' render={MyNavBar}/>
          <Route exact path='/' render={MyHomePage}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/login' render={MyLoginPage}/>
          <Route path='/register' render={MyRegisterPage}/>
          <Route path='/premium' render={MyPremiumPage}/>
        </div>
      </BrowserRouter>
    )
  }
}



export default App;
