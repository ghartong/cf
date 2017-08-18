import React from "react";

import "./Page.scss";

export default class Contact_pg extends React.Component{
	render(){
		return(
			<div>
			    <p>If you have questions regarding the conference, please contact</p>
				<h4>Business Support Services</h4>
				<p>1-800-527-8074<br/>
					or<br/>
					330-668-5000, Ext. 8074</p>
				<p><a href="mailto:mlc@signetjewelers.com">mlc@signetjewelers.com</a></p>
				<article>
                    <aside class="diamond">
                        <img src="img/diamond_8.png" alt="Happy People" class="img-responsive" role="presentation" />
                    </aside>
				</article>
			</div>
		);
	}
}
