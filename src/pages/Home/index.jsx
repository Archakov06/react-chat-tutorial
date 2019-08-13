import React from "react";
import { Button } from "antd";
import { Messages, ChatInput, Status, Sidebar } from "containers";

import "./Home.scss";

const Home = () => (
  <section className="home">
    <div className="chat">
      <Sidebar />
      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div />
          <Status online />
          <Button type="link" shape="circle" icon="ellipsis" />
        </div>
        <div className="chat__dialog-messages">
          <Messages />
        </div>
        <div className="chat__dialog-input">
          <ChatInput />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
