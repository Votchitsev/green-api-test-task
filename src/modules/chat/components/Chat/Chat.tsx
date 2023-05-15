import React from 'react';
import Messages from 'modules/chat/components/Chat/Messages';
import MessageForm from 'modules/chat/components/Chat/MessageForm/';
import style from 'modules/chat/components/Chat/Chat.module.scss';
import Button from 'modules/common/components/Button';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setActive } from 'modules/chat/state/slice';

function Chat() {
  const dispatch = useAppDispatch();
  const activeChat = useAppSelector(state => state.chat.activeChat);

  const onCloseHandle = () => {
    dispatch(
      setActive(activeChat),
    );
  }

  return (
    <section className={style.chat_container}>
      <Messages />
      <MessageForm />
      <Button
        type={'button'}
        name='close'
        extraStyle={style.close_button}
        onClick={onCloseHandle}
      />
    </section>
  );
}

export default Chat;
