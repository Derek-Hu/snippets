import React from 'react';
import style from './style.module.scss';

interface IProps {
  title: any;
  children: React.ReactNode;
}
export default ({ title, children }: IProps) => {
  return (
    <section className={style.contentSection}>
      <div className={style.contentSectionHeader}>{title}</div>
      <div className={style.contentSectionMain}>{children}</div>
    </section>
  );
};
