import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';
import classNames from 'classnames';

import { Message } from '../';

import './Messages.scss';

const Messages = ({
  onRemoveMessage,
  blockRef,
  isLoading,
  items,
  user,
  previewImage,
  setPreviewImage,
  blockHeight,
  isTyping,
  partner,
}) => {
  return (
    <div className="chat__dialog-messages" style={{ height: `calc(100% - ${blockHeight}px)` }}>
      <div ref={blockRef} className={classNames('messages', { 'messages--loading': isLoading })}>
        {isLoading && !user ? (
          <Spin size="large" tip="Загрузка сообщений..." />
        ) : items && !isLoading ? (
          items.length > 0 ? (
            items.map(item => (
              <Message
                {...item}
                isMe={user._id === item.user._id}
                onRemoveMessage={onRemoveMessage.bind(this, item._id)}
                setPreviewImage={setPreviewImage}
                key={item._id}
              />
            ))
          ) : (
            <Empty description="Диалог пуст" />
          )
        ) : (
          <Empty description="Откройте диалог" />
        )}
        {isTyping && <Message isTyping={true} user={partner} />}
        <Modal visible={!!previewImage} onCancel={() => setPreviewImage(null)} footer={null}>
          <img src={previewImage} style={{ width: '100%' }} alt="Preview" />
        </Modal>
      </div>
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
