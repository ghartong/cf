import React from "react";

import "../../css/_global.scss";
import Header from "../components/Header/Header";
import Title from "../components/Header/Title";
import Nav from "../components/Navigation/Nav";
import Sidebar from "../components/Page/Sidebar";
import Footer from "../components/Footer/Footer";

export default class Layout extends React.Component{	
	render(){
		const {location} = this.props;
		// passed in from Route
		const child_title = this.props.children.props.route.title;
		return(
			<div class="row" id="mainrow">
				<div class="col-sm-12">
					<Title title={this.props.title} />
				</div>
				<Nav location={location} />
				<div class="col-sm-8 col-md-9 main">
					<Header title={"2017 Managers' Leadership Conference"} child_title={child_title}/>
					<div class="col-xs-12 col-md-8 main_content">
						{this.props.children}
					</div>
					<Sidebar location={location} />
					<Footer />
				</div>
			</div>
		);
	}
}
