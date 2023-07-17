import React from 'react';
import './Tabs.css';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';

function Tabs() {
  return (
    <div className="tabs">
      <div className="tab">
        <div className="tab-title">
          <BookmarksOutlinedIcon />
        </div>
      </div>
	 <div className="tab">
        <div className="tab-title">
          <BookmarksOutlinedIcon />
        </div>
      </div>

	 <div className="tab">
        <div className="tab-title">
          <BookmarksOutlinedIcon />
        </div>
      </div>

    </div>
  );
}

export default Tabs;
