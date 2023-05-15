import React, { useEffect, useRef } from 'react';
import Message from 'modules/chat/components/Chat/Messages/Message';
import style from 'modules/chat/components/Chat/Messages/Messages.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks';
import { ChatItemInterface } from 'modules/chat/state/interface';
import { fetchIncomingMessages } from 'modules/chat/state/slice';

function Messages() {
  const messagesAreaRef = useRef();

  const dispatch = useAppDispatch();

  const auth = useAppSelector(state => state.auth);

  const activeChat = useAppSelector(state => state.chat.chatList.find(
    (chat: ChatItemInterface) => Number(chat.phoneNumber) === Number(state.chat.activeChat),
  ));

  const setScrollMessagesArea = () => {
    const messagesArea : HTMLElement = messagesAreaRef.current;

    if (messagesArea) {
      messagesArea.scrollTop = messagesArea.scrollHeight;
    };
  }

  useEffect(() => {
    setScrollMessagesArea();
  }, [activeChat])

  useEffect(() => {   
    setScrollMessagesArea();

    const reqData = {
      idInstance: auth.idInstance,
      apiTokenKey: auth.ApiTokenInstance,
    };

    dispatch(
      fetchIncomingMessages(reqData),
    );
  }, [dispatch, auth]);

  return (
    <section className={style.messages_area} ref={messagesAreaRef}>
      { activeChat?.messages.map(
        (message, index) =>
          <Message
            key={index}
            type={message.type}
            content={message.text}
          />
      )}
    </section>
  );
}

export default Messages;
