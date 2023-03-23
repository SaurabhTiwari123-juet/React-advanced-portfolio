/** @format */

import "./Footerstyle.css";
import React from "react";
import { Link } from "react-router-dom";
import {
	FaFacebook,
	FaGithub,
	FaHome,
	FaLinkedin,
	FaMailBulk,
	FaPhone,
	FaTwitter,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='left'>
					<div className='location'>
						<FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
						<div>
							<p>Remote</p>
							{/* <p>Worldwide</p> */}
						</div>
					</div>
					<div className='phone'>
						<h4>
							<FaPhone
								size={20}
								style={{ color: "#fff", marginRight: "2rem" }}
							/>
							+919664262983
						</h4>
					</div>

					<div className='email'>
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: "#fff", marginRight: "2rem" }}
							/>
							saurabhtiwarickms@gmail.com
						</h4>
					</div>
				</div>
				<div className='right'>
					<h4> About the company</h4>
					<p> this is saurabh </p>

					<div className='social'>
						<a href='https://twitter.com/saurabh80657915' target='_blank'>
							<FaTwitter
								size={30}
								style={{
									color: "#fff",
									marginRight: "1rem",
									className: "fa-link",
								}}
							/>
						</a>

						<a
							href='https://www.linkedin.com/in/saurabh-t-2129b9190/'
							target='_blank'>
							<FaLinkedin
								size={30}
								style={{ color: "#fff", marginRight: "1rem" }}
							/>
						</a>
						<a href='https://github.com/SaurabhTiwari123-juet' target='_blank'>
							<FaGithub
								size={30}
								style={{ color: "#fff", marginRight: "1rem" }}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
