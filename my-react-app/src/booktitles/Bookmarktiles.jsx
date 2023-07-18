import React from 'react';
import './Bookmarktiles.css';

function BookmarkTiles() {
  return (
    <div>
      <div className='bookmark-title'>
        <img src='http://wikipedia.org/favicon.ico' alt='' />
      </div>

      <div className='bookmark-title'>
        <img src='http://linkedin.com/favicon.ico' alt='' />
      </div>

      <div className='bookmark-title'>
        <img src='http://facebook.com/favicon.ico' alt='' />
      </div>

      <div className='bookmark-title'>
        <img src='http://instagram.com/favicon.ico' alt='' />
      </div>
    </div>
  );
}

export default BookmarkTiles;
