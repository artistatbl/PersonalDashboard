import React from 'react';
import './Tabs.css';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

function Tabs() {
  return (
    <div className="tabs">
      <div className="tab bookmark-tab">
        <div className="tab-title">
          <BookmarksOutlinedIcon />
        </div>
      </div>
	 <div className="tab todo-tab">
        <div className="tab-title">
          <PlaylistAddCheckOutlinedIcon />
        </div>
      </div>

	 <div className="tab note-tab">
        <div className="tab-title">
          <TextSnippetOutlinedIcon />
        </div>
      </div>

    </div>
  );
}

export default Tabs;
