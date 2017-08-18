import React from "react";

import "./Page.scss";

export default class Attire_pg extends React.Component{
	render(){
		return(
			<div>
                <h2>Casual</h2>
				<p>Men: Walking shorts, lightweight pants or nice jeans, knit tops or polo shirts, comfortable shoes.</p>
                <p>Women: Walking shorts, lightweight slacks or nice jeans, short sleeve blouses or shirts, comfortable shoes.</p>

				<h2>Business Casual</h2>
				<p>Men: Cotton trousers and shirts. Jackets and ties are not necessary. No shorts or jeans.</p>
				<p>Women: Dress pants or lightweight slacks, short sleeved blouses or shirts. No jeans or extremely casual-style shorts.</p>

				<h2>Business Formal</h2>
				<p>Team Members are being asked to wear jewel-toned attire for this year’s Gemmie Awards. A ballroom filled with all attendees wearing these sophisticated colors of emerald, sapphire and ruby red will be a spectacular sight, adding to the excitement of this glamorous evening!</p>
				<ul>
					<li>Women are encouraged to wear a nice formal dress or suit.</li>
					<li>Men are encouraged to wear a suit and enhance it with jewel colors by wearing a tie or vest in emerald, sapphire or ruby red.</li>
				</ul>

                <article>
					<h2>Conference T-Shirt</h2>
					<p>You will also receive a "Customer First" t-shirt. Please wear this t-shirt on Monday, September 11th to show your Signet Team Spirit!</p>
					<p class="fake-space">&nbsp;<br/></p>
                    <aside class="callout">
                        <img src="img/temp_reminder.png" alt="Reminder" class="img-responsive" role="presentation" />
                    </aside>
                </article>

			</div>
		);
	}
}
