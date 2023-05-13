import { type CSSProperties, type MouseEventHandler } from 'react';

export interface PropInterface {
  extraStyle?: CSSProperties;
  type: 'submit' | 'button' | 'reset';
  name: string;
  onClick?: MouseEventHandler;
}
