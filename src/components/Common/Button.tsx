import React from 'react';
import cn from 'classnames';

interface ButtonI {
  className?: string;
  onClick: (e: React.FormEvent) => void;
  children?: string | React.Component;
  disabled?: boolean;
}

const Button: React.FC<ButtonI> = props => (
  <button
    type='button'
    className={cn('btn', props.className)}
    onClick={props.onClick}
    disabled={props.disabled}>
    {props.children}
  </button>
);

export default Button;
