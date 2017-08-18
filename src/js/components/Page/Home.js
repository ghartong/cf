import React from "react";
import { Link } from "react-router";

import "./Page.scss";

export default class Home_pg extends React.Component{
	render(){
		return(
			<div>
				<p>Are you ready to kick start the upcoming Holiday Selling Season with the Managers' Leadership Conference? This year's Managers' Leadership Conference is quickly approaching, and we want you to be ready to engage, discover and deliver! This website is a resource and your one-stop-shop to prepare you for the upcoming conference. You will find answers to every question you have, and even answers to questions you have yet to discover! Please take your time and look through the website to become familiar with the new and exciting things to look forward to this year in Orlando!</p>

				<h2>Deliver On the Big Screen!</h2>
				<p>The countdown is on and the 2017 Signet Managers’ Leadership Conference is quickly approaching, and we need your help gathering photos from the field. Please share with us group pictures of you and your Team in your Store or Design & Service Center. Your fabulous images will be featured on the big screen in Orlando. We are looking for posed group photos of your Team as well as photos of Team Members working/interacting with each other.</p>
				<p>Please send electronic copies of your favorite images to <a href="mailto:2017MLC@impactcommunications.com">2017MLC@impactcommunications.com</a>. High-quality images taken with DSLR cameras are preferred, but good quality images taken with smartphones are also welcome. If using a smartphone, please be sure that the device is held horizontally (landscape mode) when photos are taken.</p>
				<p>Please be sure to include your Store/Design &amp; Service Center number and logo in each file name. (For example: Zales_Store70_photo1.jpg, Kay_Store70_photo2.jpg, etc.)</p>
				<h2>Recent Announcements</h2>
				<article>
					<p>08/18/17 – Pre-Work is now available for review. Click <Link to="prework">here</Link> to access these documents!</p>
					<p>07/17/17 - <Link to="learning">Click Here</Link> to view more details on the MANDATORY session for all Managers, except Pagoda.</p>
					<p>07/05/17 - MLC Registration is live! Select “Register Now" on the left hand side to complete your registration today!</p>
                    <aside class="diamond">
                        <img src="img/diamond_16.png" alt="Happy People" class="img-responsive" role="presentation" />
                    </aside>
				</article>
			</div>
		);
	}
}
