import React from 'react';
import './styles.css';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, ...props }) => {
  return (
    <button className={clsx('btn', `btn-${variant}`, className)} {...props}>
      {props.children}
    </button>
  );
};
