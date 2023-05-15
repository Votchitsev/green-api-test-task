import React from 'react';
import ChatTemplate from 'modules/chat/components/ChatTemplate'
import ChatList from 'modules/chat/components/ChatList';
import Chat from 'modules/chat/components/Chat';
import { useAppDispatch, useAppSelector } from 'hooks';
import Button from 'modules/common/components/Button';
import { logout } from 'modules/authorization/state/slice';
import style from './ChatPage.module.scss';

function ChatPage() {
  const activeChat = useAppSelector(state => state.chat.activeChat);
  const dispatch = useAppDispatch();

  const logoutHandle = () => {
    dispatch(
      logout(),
    );
  };

  return (
    <ChatTemplate>
      <ChatList />
      { activeChat
        ? <Chat />
        : <div className={style.logout_button}>
          <Button type='button' name='logout' onClick={ logoutHandle }/>
        </div> }
    </ChatTemplate>
  )
}

export default ChatPage;
