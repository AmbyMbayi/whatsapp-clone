import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVetIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import styles from "./Sidebar.module.css";
import SidebarChat from "../SidebarChat/SidebarChat";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <Avatar />

        <div className={styles.sidebar_headerRight}>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVetIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.sidebar_search}>
        <div className={styles.sidebar_searchContainer}>
          <SearchOutlinedIcon />
          <input type="text" placeholder="search or start a new chat..." />
        </div>
      </div>
      <div className={styles.sidebar_chats}>
        <SidebarChat />
      </div>
    </div>
  );
};
export default Sidebar;
