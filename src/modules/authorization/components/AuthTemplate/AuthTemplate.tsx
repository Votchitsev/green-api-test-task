import React, { type ReactNode } from 'react';
import style from 'modules/authorization/components/AuthTemplate/AuthTemplate.module.scss';

function AuthTemplate ({ children } : { children: ReactNode }) {
  return (
    <section className={style.template}>
      { children }
    </section>
  );
}

export default AuthTemplate;
