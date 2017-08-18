import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory, Redirect} from "react-router";

import Layout from './layouts/main';
import Register_pg from './components/Page/Register';
import Home_pg from './components/Page/Home';
import Expectations_pg from './components/Page/Expectations';
import Agenda_pg from './components/Page/Agenda';
import General_pg from './components/Page/General';
import Seminars_pg from './components/Page/Seminars';
import Travel_pg from './components/Page/Travel';
import Resort_pg from './components/Page/Resort';
import Prework_pg from './components/Page/Prework';
import Learning_pg from './components/Page/Learning';
//import Events_pg from './components/Page/Events';
import Attire_pg from './components/Page/Attire';
import Sponsors_pg from './components/Page/Sponsors';
import Gallary_pg from './components/Page/Gallary';
import Faqs_pg from './components/Page/Faqs';
import Contact_pg from './components/Page/Contact';
import Survey_pg from './components/Page/Survey';
import Fourohfour from './layouts/Fourohfour';

const app = document.getElementById('app');

ReactDOM.render(
	<Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home_pg} title="Welcome"></IndexRoute>
			<Route path="register" name="register" component={Register_pg} title="Register Now"></Route>
			<Route path="attendee-expectations" name="expectations" component={Expectations_pg} title="Attendee Expectations"></Route>
			<Route path="agenda" name="agenda" component={Agenda_pg} title="Conference at a Glance"></Route>
			<Route path="general" name="general" component={General_pg} title="General Sessions"></Route>
			<Route path="seminars" name="seminars" component={Seminars_pg} title="Seminar Overviews"></Route>
			<Route path="travel-information" name="travel" component={Travel_pg} title="Travel Information"></Route>
			<Route path="resort" name="resort" component={Resort_pg} title="Resort Information"></Route>
			<Route path="prework" name="prework" component={Prework_pg} title="Conference Pre-work"></Route>
			<Route path="learning" name="learning" component={Learning_pg} title="Learning and Exploration Opportunities"></Route>
			<Route path="attire" name="attire" component={Attire_pg} title="Conference Attire"></Route>
			<Route path="sponsors" name="sponsors" component={Sponsors_pg} title="Conference Sponsors"></Route>
			<Route path="gallary" name="gallary" component={Gallary_pg} title="2016 Photo Gallery"></Route>
			<Route path="faqs" name="faqs" component={Faqs_pg} title="FAQs"></Route>
			<Route path="survey" name="survey" component={Survey_pg} title="Survey"></Route>
			<Route path="contact-us" name="contact" component={Contact_pg} title="Contact Us"></Route>
		</Route>
		{/* could use completely different layout for 404 or whatever */}
		<Route path="*" name="fourohfour" component={Fourohfour} title="Ooops!!"></Route>
	</Router>,
	app
);
