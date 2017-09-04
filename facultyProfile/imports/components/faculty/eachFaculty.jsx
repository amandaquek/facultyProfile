import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

export default class eachFaculty extends Component{
  constructor(props) {
    super(props);

    this.state = {
        count: 0,
    };
  }

  increaseCount(){
    this.setState({
        count: this.state.count + 1
    });
  }

  render(){
    return(
        <div className="row">
            <div className="col-xs-12">
                <div className="hidTop">
                    <h1 className="mainHeader">{this.props.projectTitle}</h1>
                </div>
            </div>
            {this.props.projectPoster.map((poster, index) => {
                return(
            <div className="col-xs-3" key={index}>
                <Link to ={{
                    pathname: '/ViewProject',
                    state: { ProjectID: 'b46eebe3-53f4-4d7e-adaf-f7459dffc230' }
                }}>
                    <p><img src={poster} alt="poster" className="img-thumbnail" /></p>
                    <p className="projHead">{this.props.projectName[this.state.count]}</p>
                    <p>{this.props.projectDesc[this.state.count]}</p>
                </Link>
            </div>
                )
                {this.increaseCount}
            }
            )
            }
            <div className="col-xs-3">
                  <h1 className="mainHeader hidden">{this.props.projectTitle}</h1>
                  <p className="mainLinkFaculty floatBottom">
                    <button className="btn btn-success">
                        <Link to ={{
                            pathname: '/AllProjects',
                        }}>View all projects
                        </Link>
                    </button>
                  </p>
            </div>
        </div>
        );
  }
}

eachFaculty.propTypes = {
    projectPoster: PropTypes.array.isRequired,
    projectName: PropTypes.array.isRequired,
    projectDesc: PropTypes.array.isRequired,
};
