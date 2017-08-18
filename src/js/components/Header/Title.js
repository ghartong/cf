import React from "react";
import {Link} from "react-router";

import "./Title.scss";

export default class Title extends React.Component{
	render(){
		return(
			<div class="row title">
				<div class="logo col-xs-12"><img src="img/logo.png" alt={this.props.title} role="presentation" /></div>
				<div class="col-xs-12 datebar">
					<span class="col-xs-12 col-md-6 d0">
						<span class="d1">2017</span> <span class="d2">Managers' Leadership Conference</span> 
					</span>
					<span class="d3 col-xs-12 col-md-6">Saturday, September 9th - Wednesday, September 13th</span>
				</div>
			</div>
		);
	}
}
