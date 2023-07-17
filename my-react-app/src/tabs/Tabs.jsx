import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import './Tabs.css';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

function Tabs() {
  return (

    
    <div className="tabs">
      <Link to="/bookmarks" className="tab bookmark-tab">
        <div className="tab-title">
          <BookmarksOutlinedIcon />
        </div>
        {/* <Outlet /> */}
      </Link>
      


      <Link to="/Todos" className="tab todo-tab">
        <div className="tab-title">
          <PlaylistAddCheckOutlinedIcon />
        </div>
        {/* <Outlet /> */}
      </Link>

      
      <Link to="/Notes" className="tab note-tab">
        <div className="tab-title">
          <TextSnippetOutlinedIcon />
        </div>
      </Link>
    </div>
  );
}

export default Tabs;
