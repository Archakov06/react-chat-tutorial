import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Messages, ChatInput, Status, Sidebar } from 'containers';
import { connect } from 'react-redux';

import './Home.scss';

import { dialogsActions } from 'redux/actions';

const Home = props => {
  const { setCurrentDialogId, user } = props;
  useEffect(() => {
    const { pathname } = props.location;
    const dialogId = pathname.split('/').pop();
    setCurrentDialogId(dialogId);
  }, [props.location.pathname]);

  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
        {user && (
          <div className="chat__dialog">
            <Status />
            <Messages />
            <div className="chat__dialog-input">
              <ChatInput />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default withRouter(
  connect(
    ({ user }) => ({ user: user.data }),
    dialogsActions,
  )(Home),
);
