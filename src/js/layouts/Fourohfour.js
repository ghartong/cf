import React from "react";

import Header from "../components/Header/Header";
import Nav from "../components/Navigation/Nav";
import Footer from "../components/Footer/Footer";
import Title from "../components/Header/Title";

export default class Fourohfour extends React.Component{
	render(){
		/* passed in from Route */
		const child_title = this.props.route.title;
		return(
			<div class="row" id="mainrow">
				<div class="col-sm-12">
					<Title title={this.props.title} />
				</div>
				<Nav location={location} />
				<div class="col-sm-8 col-md-9 main">
					<Header title={"2017 Managers' Leadership Conference"} child_title={child_title}/>
					<div class="col-xs-12 col-md-9 main_content">
						Sorry, that page doesn't exist. Please check the URL and try again, or contact your admin.
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}
