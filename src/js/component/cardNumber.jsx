import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CardNumber = props => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			if (counter != 9) {
				setCounter(counter + 1);
			} else {
				setCounter(0);
			}
		}, 1000 * props.time);
		return () => clearInterval(interval);
	}, [counter]);

	return <div>{counter}</div>;
};

export default CardNumber;

CardNumber.propTypes = {
	time: PropTypes.number
};
