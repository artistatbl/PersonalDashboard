import React from  'react';
import { Outlet } from "react-router-dom";

function Notes() {
	return (
		<div>
		<h1>Notes</h1>
		<p>This is a basic React component.</p>
		<Outlet />
	   </div>
	);
	
}

export default Notes;