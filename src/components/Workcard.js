/** @format */
import "./Workcardstyle.css";
import React from "react";

import { NavLink } from "react-router-dom";
const Workcard = (props) => {
	return (
		<div className='project-card'>
			<img src={props.imgsrc} alt='' />
			<h2 className='project-title'>{props.title}</h2>
			<div className='pro-details'>
				<p>{props.text}</p>
				<div className='pro-btns'>
					{/* <NavLink to={props.view} className='btn'>
						View
					</NavLink> */}
					<a href={props.view} target='_blank' className='btn' rel='noreferrer'>
						View
					</a>
					<a href={props.src} target='_blank' className='btn' rel='noreferrer'>
						Source
					</a>
				</div>
			</div>
		</div>
	);
};

export default Workcard;
