import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonI {
  className?: string;
  onClick: (e: React.FormEvent) => void;
  children?: string | React.ReactChild;
  disabled?: boolean;
}

const Button: React.FC<ButtonI> = props => (
  <button
    type='button'
    className={cn('btn', props.className, styles.button)}
    onClick={props.onClick}
    disabled={props.disabled}>
    {props.children}
  </button>
);

export default Button;
