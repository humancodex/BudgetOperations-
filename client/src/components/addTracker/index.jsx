import React from "react";
import { Plus } from "react-feather";
import './style.scss'


function addTracker() {
	return (
		<button className="trackerButton">
			<span>Add Tracker</span>
		<Plus/>
		</button>
	);
}

export default addTracker;
