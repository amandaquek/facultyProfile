import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, props } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavComponent extends Component{

    render(){
        return(
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href=""><img src="/img/Ngee Ann Logo.jpg" /></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/AllStudents">Student</a></li>
                <li><a href="/AllProjects">Projects</a></li>
                <li><a href="/AllFaculty">Faculty</a></li>
              </ul>
            </div>
          </div>
        </nav>
        );
    }
}
