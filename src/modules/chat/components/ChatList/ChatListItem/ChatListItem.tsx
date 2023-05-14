import React, { useState, type CSSProperties, type MouseEvent } from 'react';
import style from 'modules/chat/components/ChatList/ChatListItem/ChatListItem.module.scss';
import Button from 'modules/common/components/Button';
import { type PropInterface } from './interface';
import { useAppDispatch } from 'hooks';
import { removeChat } from 'modules/chat/state/slice';
import { setActive } from 'modules/chat/state/slice';

function ChatListItem({ phoneNumber, activeChat } : PropInterface) {
  const dispatch = useAppDispatch();
  const [buttonStyle, setButtonStyle] = useState<CSSProperties>(style.delete_button); 

  const onEnterHandle = (action: 'enter' | 'leave') => {
    if (action === 'enter') {
      setButtonStyle(style.delete_button_active)
    }

    if (action === 'leave') {
      setButtonStyle(style.delete_button)
    }
  };

  const onDeleteHandle = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    
    dispatch(
      removeChat(phoneNumber),
    );
  };

  const onSetActiveHandle = () => {
    dispatch(
      setActive(phoneNumber),
    );
  };

  return (
    <li
      className={`${style.item} ${activeChat === phoneNumber ? style.item__active: ''}`}
      onMouseEnter={() => onEnterHandle('enter')}
      onMouseLeave={() => onEnterHandle('leave')}
      onClick={onSetActiveHandle}
    >
      { phoneNumber }
      <Button
        type={'button'}
        name={'delete'}
        extraStyle={buttonStyle}
        onClick={onDeleteHandle}
      />
    </li>
  )
};

export default ChatListItem;
