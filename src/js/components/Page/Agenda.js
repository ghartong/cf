import React from "react";

import "./Page.scss";

export default class Agenda_pg extends React.Component{
	render(){
		return(
			<div class="agenda">
				<img src={`img/agenda.png`} class="img-responsive" alt="Agenda" />
			</div>
		);
	}
}
