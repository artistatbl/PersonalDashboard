import React from 'react';
import './Bookmarks.css' ;
import BookmarkTiles from '../booktitles/Bookmarktiles';

function Bookmarks() {
	return (
	<div className='bookmarks-wrapper'> 
	
	<div className='container'> 
	
	 <div className='bookmark-container'>

	 <BookmarkTiles />
	 <br />
	 <BookmarkTiles />
	<br/>
	

	 
	

	
	 </div>  
	 
	 </div>
	 
	 </div>
	 
	 );

}

export default Bookmarks;
