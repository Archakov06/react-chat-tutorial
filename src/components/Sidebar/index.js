import React from 'react';
import { Icon, Button, Modal, Select, Input, Form } from 'antd';
import { Dialogs } from 'containers';

import './Sidebar.scss';

const { Option } = Select;
const { TextArea } = Input;

const Sidebar = ({
  user,
  visible,
  inputValue,
  messageText,
  selectedUserId,
  isLoading,
  users,
  onShow,
  onClose,
  onSearch,
  onChangeInput,
  onSelectUser,
  onChangeTextArea,
  onModalOk,
}) => {
  const options = users.map(user => <Option key={user._id}>{user.fullname}</Option>);

  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div>
          <Icon type="team" />
          <span>Список диалогов</span>
        </div>
        <Button onClick={onShow} type="link" shape="circle" icon="form" />
      </div>

      <div className="chat__sidebar-dialogs">
        <Dialogs userId={user && user._id} />
      </div>
      <Modal
        title="Создать диалог"
        visible={visible}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            Закрыть
          </Button>,
          <Button
            disabled={!messageText}
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={onModalOk}>
            Создать
          </Button>,
        ]}>
        <Form className="add-dialog-form">
          <Form.Item label="Введите имя пользователя или E-Mail">
            <Select
              value={inputValue}
              onSearch={onSearch}
              onChange={onChangeInput}
              onSelect={onSelectUser}
              notFoundContent={null}
              style={{ width: '100%' }}
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              placeholder="Введите имя пользователя или почту"
              showSearch>
              {options}
            </Select>
          </Form.Item>
          {selectedUserId && (
            <Form.Item label="Введите текст сообщения">
              <TextArea
                autosize={{ minRows: 3, maxRows: 10 }}
                onChange={onChangeTextArea}
                value={messageText}
              />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

Sidebar.defaultProps = {
  users: [],
};

export default Sidebar;
