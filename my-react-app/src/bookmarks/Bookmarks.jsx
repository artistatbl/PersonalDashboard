import React from  'react';
import { Outlet } from "react-router-dom";

function Bookmarks() {
	return (
		<div>
		<h1>Hello, React!</h1>
		<p>This is a basic React component.</p>
		<Outlet />
	   </div>
	);
	
}

export default Bookmarks;