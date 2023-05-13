import React from 'react';
import { PropInterface } from 'modules/common/components/Button/interface'
import style from 'modules/common/components/Button/Button.module.scss';

function Button ({ extraStyle, type, name, onClick } : PropInterface) {
  return (
    <button
      type={type}
      className={`${style.button} ${extraStyle}`}
      onClick={onClick}
    >
      { name }
    </button>
  );
}

export default Button;
