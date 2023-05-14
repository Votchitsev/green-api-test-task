import React, { type ReactNode } from 'react';
import style from 'modules/chat/components/ChatTemplate/ChatTemplate.module.scss';

function ChatTemplate({ children } : { children: ReactNode }) {
  return (
    <section className={style.template}>
      { children }
    </section>
  );
}

export default ChatTemplate;
