import React, { useEffect, useRef } from 'react';
import Message from 'modules/chat/components/Chat/Messages/Message';
import style from 'modules/chat/components/Chat/Messages/Messages.module.scss'
import { useAppSelector } from 'hooks';
import { ChatItemInterface } from 'modules/chat/state/interface';

function Messages() {
  const messagesAreaRef = useRef();

  const activeChat = useAppSelector(state => state.chat.chatList.find(
    (chat: ChatItemInterface) => Number(chat.phoneNumber) === Number(state.chat.activeChat),
  ));

  useEffect(() => {
    const messagesArea : HTMLElement = messagesAreaRef.current;

    if (messagesArea) {
      messagesArea.scrollTop = messagesArea.scrollHeight;
    }
  }, []);

  return (
    <section className={style.messages_area} ref={messagesAreaRef}>
      { activeChat?.messages.map(
        message => <Message type={message.type} content={message.text} />
      )}
    </section>
  )
}

export default Messages;
