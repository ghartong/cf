import React from "react";
import { IndexLink, Link } from "react-router";

import "./Nav.scss";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
      today: new Date(),
      /* remember months are 0 based (so -1 to get correct month) */
      survey: new Date(2017, 8, 4, 0, 0, 0), /* 9/1/2017 */
      survey_end: new Date(2017, 9, 2, 12, 0, 0) /* 10/2/2017 at noon end */
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  renderSurvey(){
    let survey_link
    if( this.state.today > this.state.survey && this.state.survey_end > this.state.today ){
      survey_link = 'https://www.surveygizmo.com/s3/3718223/2017-Managers-Leadership-Conference-Post-Event-Survey'
      return (        
          <li>
            <a href={survey_link} target="_blank">Survey</a>
          </li>        
      )
    } else {
      return (
        <li>
          <Link activeClassName="active" to="survey" onClick={this.toggleCollapse.bind(this)}>
            <img src={"img/active.png"} aria-hidden="true" />
            Survey
          </Link>
        </li>
      )
    }
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class={"col-sm-4 col-md-3 sidebar"} role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <a href="https://smlc.signetoneteam.com/travel/events/MLC/index.cfm?eventCode=MLC2017" target="_blank">Register Now</a>
              </li>
              <li >
                <IndexLink activeClassName="active" to="/" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  Welcome
                </IndexLink>
              </li>
              <li>
                <Link activeClassName="active" to="attendee-expectations" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  Attendee Expectations
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="agenda" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  Conference at a Glance
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="general" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  General Sessions
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="seminars" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  Seminar Overviews
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="travel-information" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  Travel Information
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="resort" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  Resort Information
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="prework" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  Conference Pre-work
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="learning" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  Learning and Exploration Opportunities
                </Link>
              </li>
              <li>
                <a href="pdf/program.pdf" target="_blank" onClick={this.toggleCollapse.bind(this)}>
                  Program of Events
                </a>
              </li>
              <li>
                <Link activeClassName="active" to="attire" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  Conference Attire
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="sponsors" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  Conference Sponsors
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="gallary" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="faqs" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="contact-us" onClick={this.toggleCollapse.bind(this)}>
                  <img src={"img/active.png"} aria-hidden="true" />
                  Contact Us
                </Link>
              </li>
              { this.renderSurvey() }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}