import React, { useState, type CSSProperties } from 'react';
import style from 'modules/chat/components/ChatList/ChatListItem/ChatListItem.module.scss';
import Button from 'modules/common/components/Button';
import { PropInterface } from './interface';

function ChatListItem({ phoneNumber } : PropInterface) {
  const [buttonStyle, setButtonStyle] = useState<CSSProperties>(style.delete_button);

  const onEnterHandle = (action: 'enter' | 'leave') => {
    if (action === 'enter') {
      setButtonStyle(style.delete_button_active)
    }

    if (action === 'leave') {
      setButtonStyle(style.delete_button)
    }
  };

  return (
    <li
      className={style.item}
      onMouseEnter={() => onEnterHandle('enter')}
      onMouseLeave={() => onEnterHandle('leave')}
    >
      { phoneNumber }
      <Button
        type={'button'}
        name={'delete'}
        extraStyle={buttonStyle}
      />
    </li>
  )
};

export default ChatListItem;
