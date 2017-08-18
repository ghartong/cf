import React from "react";
import ImageGallery from 'react-image-gallery';
import "./Page.scss";


export default class Gallary_pg extends React.Component{

	handleImageLoad(event) {
		console.log('Image loaded ', event.target)
	}

	render(){
		const images = [
			{
				original: 'img/gallary/Charity_Session.jpg',
				thumbnail: 'img/gallary/thumbs/Charity_Session.jpg',
				description: 'Charity Session'
			},
			{
				original: 'img/gallary/Charity_Walk.jpg',
				thumbnail: 'img/gallary/thumbs/Charity_Walk.jpg',
				description: 'Charity Walk'
			},
			{
				original: 'img/gallary/Closing_Night_Games.jpg',
				thumbnail: 'img/gallary/thumbs/Closing_Night_Games.jpg',
				description: 'Closing Night Games'
			},
			{
				original: 'img/gallary/Conference_Attendees.jpg',
				thumbnail: 'img/gallary/thumbs/Conference_Attendees.jpg',
				description: 'MLC 2016'
			},
			{
				original: 'img/gallary/Conference.jpg',
				thumbnail: 'img/gallary/thumbs/Conference.jpg',
				description: 'MLC 2016'
			},
			{
				original: 'img/gallary/CorporateClothing.jpg',
				thumbnail: 'img/gallary/thumbs/CorporateClothing.jpg',
				description: 'Corporate Clothing'
			},
			{
				original: 'img/gallary/District_Reunion.jpg',
				thumbnail: 'img/gallary/thumbs/District_Reunion.jpg',
				description: 'District Reunion'
			},
			{
				original: 'img/gallary/Game_Time.jpg',
				thumbnail: 'img/gallary/thumbs/Game_Time.jpg',
				description: 'Game Time!'
			},
			{
				original: 'img/gallary/Gemmies_2.jpg',
				thumbnail: 'img/gallary/thumbs/Gemmies_2.jpg',
				description: 'Gemmies'
			},
			{
				original: 'img/gallary/Gemmies_3.jpg',
				thumbnail: 'img/gallary/thumbs/Gemmies_3.jpg',
				description: 'Gemmies'
			},
			{
				original: 'img/gallary/Gemmies.jpg',
				thumbnail: 'img/gallary/thumbs/Gemmies.jpg',
				description: 'Gemmies'
			},
			{
				original: 'img/gallary/Group_Photo_2.jpg',
				thumbnail: 'img/gallary/thumbs/Group_Photo_2.jpg',
				description: 'MLC 2016'
			},
			{
				original: 'img/gallary/Group_Photo.jpg',
				thumbnail: 'img/gallary/thumbs/Group_Photo.jpg',
				description: 'Charity Walk'
			},
			{
				original: 'img/gallary/Jamies_Singleton_and_Kecia_Caffie.jpg',
				thumbnail: 'img/gallary/thumbs/Jamies_Singleton_and_Kecia_Caffie.jpg',
				description: 'Jamie Singleton and Kecia Caffie'
			},
			{
				original: 'img/gallary/Opening_Night_Entertainment.jpg',
				thumbnail: 'img/gallary/thumbs/Opening_Night_Entertainment.jpg',
				description: 'Opening Night Entertainment'
			},
			{
				original: 'img/gallary/Richard_Shadyac_Speaking_at_Charity_Session.jpg',
				thumbnail: 'img/gallary/thumbs/Richard_Shadyac_Speaking_at_Charity_Session.jpg',
				description: 'Richard Shadyac Speaking at Charity Session'
			},
			{
				original: 'img/gallary/Seminar_Training_2.jpg',
				thumbnail: 'img/gallary/thumbs/Seminar_Training_2.jpg',
				description: 'Seminars'
			},
			{
				original: 'img/gallary/Seminar_Training_3.jpg',
				thumbnail: 'img/gallary/thumbs/Seminar_Training_3.jpg',
				description: 'Seminars'
			},
			{
				original: 'img/gallary/Seminar_Training_4.jpg',
				thumbnail: 'img/gallary/thumbs/Seminar_Training_4.jpg',
				description: 'Seminars'
			},
			{
				original: 'img/gallary/Seminar_Training.jpg',
				thumbnail: 'img/gallary/thumbs/Seminar_Training.jpg',
				description: 'Seminars'
			},
			{
				original: 'img/gallary/SIGNET_CEO_MARK_LIGHT.jpg',
				thumbnail: 'img/gallary/thumbs/SIGNET_CEO_MARK_LIGHT.jpg',
				description: 'Signet CEO Mark Light'
			}
		]
		return(
			<div>
				<p>Check out some photos from the 2016 Managers' Leadership Conference to see what is in store for you in 2017!</p>
				<ImageGallery
					items={images}
					slideInterval={2000}
					onImageLoad={this.handleImageLoad}/>
			</div>
		);
	}
}
