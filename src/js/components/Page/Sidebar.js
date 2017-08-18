import React from "react";

import "./Sidebar.scss";

export default class Sidebar extends React.Component{
	render(){
		const { location } = this.props;

		if (location.pathname === 'trip-agenda' || location.pathname === '/trip-agenda'){
			return(
				<div class="col-xs-12 col-md-4 side_bar">
					<img src={`img/$agenda_sidebar.png`} class="img-responsive" alt="Agenda Sidebar" />
				</div>
			);
		}
		else {
			return null;
		}
	}
}
