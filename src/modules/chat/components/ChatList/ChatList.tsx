import React from 'react';
import ChatListItem from 'modules/chat/components/ChatList/ChatListItem/ChatListItem';
import style from 'modules/chat/components/ChatList/ChatList.module.scss';
import AddNumberForm from 'modules/chat/components/ChatList/AddNumberForm';
import { useAppSelector } from 'hooks';

function ChatList() {
  const chatState = useAppSelector(state => state.chat);

  return (
    <section className={style.container}>
      <AddNumberForm />
      <ul className={style.list}>
        { chatState.chatList.map(chat => <ChatListItem key={chat} phoneNumber={chat}/>) }
      </ul>
    </section>
  )
}

export default ChatList;
