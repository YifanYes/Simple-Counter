import React from "react";
import CardNumber from "./cardNumber.jsx";

const Home = () => {
	return (
		<div className="container text-center d-flex justify-content-center mt-5">
			<div className="digit m-2">
				<i className="far fa-clock"></i>
			</div>
			<div className="digit m-2">
				<CardNumber time={1000} />
			</div>
			<div className="digit m-2">
				<CardNumber time={100} />
			</div>
			<div className="digit m-2">
				<CardNumber time={10} />
			</div>
			<div className="digit m-2">
				<CardNumber time={1} />
			</div>
		</div>
	);
};

export default Home;
