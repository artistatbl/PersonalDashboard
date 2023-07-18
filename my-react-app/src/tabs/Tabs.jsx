import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Tabs.css';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

function Tabs() {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);

  const handleTabClick = (path) => {
    setSelectedTab(path);
  };

  return (
    <div className="tabs">
      <NavLink
        to="/bookmarks"
        className={`tab bookmark-tab ${selectedTab === '/bookmarks' ? 'selected' : ''}`}
        onClick={() => handleTabClick('/bookmarks')}
      >
        <div className="tab-title">
          <BookmarksOutlinedIcon />
        </div>
      </NavLink>

      <NavLink
        to="/todos"
        className={`tab todo-tab ${selectedTab === '/todos' ? 'selected' : ''}`}
        onClick={() => handleTabClick('/todos')}
      >
        <div className="tab-title">
          <PlaylistAddCheckOutlinedIcon />
        </div>
      </NavLink>

      <NavLink
        to="/notes"
        className={`tab note-tab ${selectedTab === '/notes' ? 'selected' : ''}`}
        onClick={() => handleTabClick('/notes')}
      >
        <div className="tab-title">
          <TextSnippetOutlinedIcon />
        </div>
      </NavLink>

    </div>
  );
}

export default Tabs;
