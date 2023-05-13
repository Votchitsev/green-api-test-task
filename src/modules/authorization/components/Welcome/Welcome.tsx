import React from 'react';
import style from 'modules/authorization/components/Welcome/Welcome.module.scss';

function Welcome () {
  return (
    <h1 className={style.welcome_text}>
      Hello Everyone! <br />
      Please provide credentials!
    </h1>
  )
}

export default Welcome;
