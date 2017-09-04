import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import NavigationApp from '../components/NavigationApp.jsx';
import EachFaculty from '../components/faculty/eachFaculty.jsx';
import Footer from '../components/Footer.jsx';

/*Analytics*/
import ReactGA from 'react-ga';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-101967047-1');
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
}
/*Analytics*/

export default class FacultyInfo extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      initGA();
      logPageView();
  }

  render() {

    return (
      <div>
          <NavigationApp />
          <br/>

          <header id="header">
              <div className="wrap-header">
                  <div className="main-header">
                      <div className="zerogrid">
                          <div className="row">
                              <div className="hero-heading">
                                  <span>Diploma in Information Security & Forensics</span>
                                  <div className="tl"></div>
                                  <div className="tr"></div>
                                  <div className="br"></div>
                                  <div className="bl"></div>
                              </div>
                              <div className="heading-text">
                                  <h2></h2>
                                  <p className="facultyContent">A brief introduction of what this course is about</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>

          <div className="clearfix"></div>

          <section id="container">
              <div className="wrap-container">
                  <section className="content-box box-1">
                      <div className="">
                          <div className="row wrap-box">
                              <div className="header">
                                  <h2>About the course</h2>
                                  <p className="intro">
                                      Mitigate cyber threats Singapore faces in our quest to be a smart nation. IT security professionals are in higher demand to help Singapore succeed in this quest. With rapid growth in the area of Financial Technology, information security will be even more critical to protect our financial institutions. Join the fight against cybercrime with our Diploma in Information Security & Forensics (ISF).

                                      In your first year, you will build a strong foundation in basic IT and security through modules such as Programming, Networking Fundamentals, Front End Development, Databases, Cryptography, Vulnerabilities 101 and OS Fundamentals.

                                      In your second year, you will develop skills in the areas of network security, software security and digital forensics. You will learn to set up secure computer networks, develop secure software applications and investigate cybercrimes. You will also learn how to secure codes and processes that go into developing applications, so that they are protected from external threats right fron the start. This is called the Security Development Lifecycle, and is a highly valued skill in the industry.

                                      In your final year, you will put your skills into practice by performing penetration tests on software, systems and networks, conducting in-depth forensic investigations on digital devices and networks, and analysing malicious software or malware. You will get to do all these as well as work on information security projects at our cutting-edge ISF lab.

                                      What's more, you will attend masterclasses by Information Security professionals, and hone your skills in the real world with internships at the Ministry of Home Affairs and leading IT security organisations, such as Palo Alto Networks, SecureAge, Microsoft, NCS, CrimsonLogic, CSIT and Quann. You can also attain the highly sought-after CompTIA Security+ professional certification.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </section>
              </div>
          </section>

          <br />
          <Footer />
      </div>
    );
  }
}
