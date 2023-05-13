import React, { type ReactNode } from 'react';
import style from 'modules/common/components/Background/Background.module.scss';

function Background({ children } : { children: ReactNode } ) {
  return (
    <div className={style.background}>
      <div className={style.background_top} />
      { children }
    </div>
  )
}

export default Background;
