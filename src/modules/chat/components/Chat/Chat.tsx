import React from 'react';
import Messages from 'modules/chat/components/Chat/Messages';
import MessageForm from 'modules/chat/components/Chat/MessageForm/'
import style from 'modules/chat/components/Chat/Chat.module.scss';

function Chat() {
  return (
    <section className={style.chat_container}>
      <Messages />
      <MessageForm />
    </section>
  );
}

export default Chat;
