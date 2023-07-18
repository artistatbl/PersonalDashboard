import React from  'react';
import { Outlet } from "react-router-dom";

function Todos() {
	return (
		<div>
		<h1>toddos</h1>
		<p>This is a basic React component.</p>
		<Outlet />
	   </div>
	);
	
}

export default Todos;