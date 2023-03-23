/** @format */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import Heroimg2 from "../components/Heroimg2";
import Aboutcontnet from "../components/Aboutcontnet";

const About = () => {
	return (
		<div>
			<Navbar />
			<Heroimg2 heading='ABOUT.' text='I am a Frontend Developer' />
			<Aboutcontnet />
			<Footer />
		</div>
	);
};

export default About;
