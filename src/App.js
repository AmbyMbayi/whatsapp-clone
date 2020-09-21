import React, { Component } from "react";

//import Login from "./components/Login/Login";
import { Login, Chat, Sidebar, SidebarChat } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Whatstapp clone</h1>

        <Login />
        <Chat />
        <Sidebar />
        <SidebarChat />
      </div>
    );
  }
}

export default App;
