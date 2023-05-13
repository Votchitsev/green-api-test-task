import React, { type ReactNode } from 'react';
import style from 'modules/common/components/Layout/Layout.module.scss';

function Layout({ children } : { children: ReactNode }) {
  return (
    <section className={style.layout}>
      { children }
    </section>
  );
}

export default Layout;
