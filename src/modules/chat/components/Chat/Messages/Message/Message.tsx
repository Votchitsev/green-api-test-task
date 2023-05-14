import React from 'react';
import style from 'modules/chat/components/Chat/Messages/Message/Message.module.scss';
import { MessageProp } from 'modules/chat/components/Chat/Messages/Message/interface';

const messageStyles = {
  incoming: {
    backgroundColor: 'blue',
    alignSelf: 'flex-start'
  }, 
  outgoing: {
    backgroundColor: 'red',
    alignSelf: 'flex-end'
  }
}

function Message({ content, type } : MessageProp) {
  return (
    <div
      className={style.message}
      style={messageStyles[type]}
    >
      { content }
    </div>
  )
}

export default Message;
