import { FunctionComponent } from 'react';
import * as css from './demo.module.scss';

export interface DemoProps {
  title: string;
}

export const Demo: FunctionComponent<DemoProps> = ({ title, children }) => {
  return (
    <div className={css['container']}>
      <p className={css['title']}>{title}</p>
      <div className={css['demo']}>{children}</div>
    </div>
  );
};
