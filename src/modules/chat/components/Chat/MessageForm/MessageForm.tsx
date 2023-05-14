import React from 'react';
import style from 'modules/chat/components/Chat/MessageForm/MessageForm.module.scss';

function MessageForm() {
  return (
    <form className={style.message_form}>
      <input type="text" placeholder='Enter message' />
    </form>
  )
}

export default MessageForm;
