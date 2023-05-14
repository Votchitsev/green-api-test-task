import React, { useEffect, useRef } from 'react';
import Message from 'modules/chat/components/Chat/Messages/Message';
import style from 'modules/chat/components/Chat/Messages/Messages.module.scss'

const mockMessage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

function Messages() {
  const messagesAreaRef = useRef();

  useEffect(() => {
    const messagesArea : HTMLElement = messagesAreaRef.current;

    if (messagesArea) {
      messagesArea.scrollTop = messagesArea.scrollHeight;
    }
  }, []);

  return (
    <section className={style.messages_area} ref={messagesAreaRef}>
      <Message type={'incoming'} content='Hello world'/>
      <Message type={'outgoing'} content={mockMessage}/>
      <Message type={'incoming'} content={mockMessage}/>
      <Message type={'incoming'} content={mockMessage}/>
    </section>
  )
}

export default Messages;
