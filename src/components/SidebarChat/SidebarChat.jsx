import React from "react";
import styles from "./SidebarChat.module.css";
import { Avatar } from "@material-ui/core";

const SidebarChat = () => {
  return (
    <div className={styles.SidebarChat}>
      <Avatar />
      <div className={styles.sidebarChat_info}>
        <h2>Amby</h2>
        <p>hello mbayi</p>
      </div>
    </div>
  );
};

export default SidebarChat;
