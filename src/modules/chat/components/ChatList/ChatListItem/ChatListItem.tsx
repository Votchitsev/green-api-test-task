import React, { useState, type CSSProperties } from 'react';
import style from 'modules/chat/components/ChatList/ChatListItem/ChatListItem.module.scss';
import Button from 'modules/common/components/Button';

function ChatListItem() {
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
      +7 (000) 000-00-00
      <Button
        type={'button'}
        name={'delete'}
        extraStyle={buttonStyle}
      />
    </li>
  )
};

export default ChatListItem;
