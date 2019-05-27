import React from 'react';
import './MenuPageNav.css';


class MenuPageNav extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}

	render(){
		return(
			<section className="menuPageNav-container" id="menuPageNav-content">
				<div className="menuPageNav-content">
					<a href="#fake-menu-root" className="menuPageNav-menu">Menu</a>
					<a href="#fake-about-root" className="menuPageNav-about">About</a>
					<a href="#fake-reviews-root" className="menuPageNav-reviews">Reviews</a>
				</div>
			</section>
			)
	}
}

export default MenuPageNav;