/** @format */

import "./herostyle.css";

import React from "react";
import { Link } from "react-router-dom";
import Introimg from "../assets/intro-bg.jpg";
const HeroImg = () => {
	return (
		<div className='hero'>
			<div className='mask'>
				<img className='into-img' src={Introimg} alt='Introimg' />
			</div>
			<div className='content'>
				<p>Hi, I'M A DEVELOPER</p>
				<h1>React Developer</h1>
				<div>
					<Link to='/project' className='btn'>
						Projects
					</Link>
					<Link to='/contact' className='btn btn-light'>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroImg;
