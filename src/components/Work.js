/** @format */
/** @format */
import "./Workcardstyle.css";
import React from "react";
// import pro1 from "../assets/project1.png";
// import { NavLink } from "react-router-dom";
import Workcard from "./Workcard";
import WorkCardData from "./WorkCardData";
const Work = () => {
	return (
		<div className='work-container'>
			{/* <h1 className='project-heading'> </h1> */}
			<div className='project-container gap'>
				{WorkCardData.map((val, ind) => {
					return (
						<Workcard
							key={ind}
							imgsrc={val.imgsrc}
							title={val.title}
							text={val.text}
							view={val.view}
							src={val.src}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Work;
