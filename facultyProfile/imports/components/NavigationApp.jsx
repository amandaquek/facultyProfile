import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, props } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavigationApp extends Component{
    render(){
        return(
            <div>
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

                <nav>
                    <div className="navWide">
                        <ul className="clearfix">
                            <li><a href="/"><img className="logo" id="main-img" src="/img/Ngee Ann Logo.jpg" /></a></li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/About">About</a></li>
                            <li><a href="/AllStudents">Student</a></li>
                            <li><a href="/AllProjects">Project</a></li>
                            <li><a href="/AllFaculty">Faculty</a></li>
                            <li><a href="#">FAQ</a></li>
                            <div id="search">
                                <form method="GET" action="#">
                                    <input type="text" name="searchField" placeholder="Search" size="30" onChange={this.props.onSearchChange} />
                                </form>
                            </div>
                        </ul>
                    </div>
                    <div className="navNarrow">
                        <img className="logo" src="/img/Ngee Ann Logo.jpg" />
                        <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                        <ul className="clearfix narrowLinks">
                            <li><a href="/" onClick={this.burgerToggle}>Home</a></li>
                            <li><a href="/About" onClick={this.burgerToggle}>About</a></li>
                            <li><a href="/AllStudents" onClick={this.burgerToggle}>Student</a></li>
                            <li><a href="/AllProjects" onClick={this.burgerToggle}>Project</a></li>
                            <li><a href="/AllFaculty" onClick={this.burgerToggle}>Faculty</a></li>
                            <li><a href="#" onClick={this.burgerToggle}>FAQ</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

    burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
}

{/*ReactDOM.render(<NavComponent />, document.querySelector('navbar'));*/}
