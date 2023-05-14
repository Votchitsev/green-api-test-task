import React from 'react';
import ChatListItem from 'modules/chat/components/ChatList/ChatListItem/ChatListItem';
import style from 'modules/chat/components/ChatList/ChatList.module.scss';
import AddNumberForm from 'modules/chat/components/ChatList/AddNumberForm';

function ChatList() {
  return (
    <section className={style.container}>
      <AddNumberForm />
      <ul className={style.list}>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </ul>
    </section>
  )
}

export default ChatList;
