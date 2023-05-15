import React from 'react';
import style from 'modules/authorization/components/Welcome/Welcome.module.scss';

function Welcome () {
  return (
    <h1 className={style.welcome_text}>
      Hello! <br />
      Please, provide "idInstance" <br /> and "apiTokenInstance"!
    </h1>
  );
}

export default Welcome;
