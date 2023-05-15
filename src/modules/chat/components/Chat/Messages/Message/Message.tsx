import React from 'react';
import style from 'modules/chat/components/Chat/Messages/Message/Message.module.scss';
import { MessageProp } from 'modules/chat/components/Chat/Messages/Message/interface';

const messageStyles = {
  incoming: {
    backgroundColor: '#d1d7db',
    alignSelf: 'flex-start'
  }, 
  outgoing: {
    backgroundColor: '#ffeecd',
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
