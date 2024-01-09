import { type ComponentProps, type FC } from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

interface IButtonProps extends ComponentProps<'button'> {}

const Button: FC<IButtonProps> = ({ className, children, type, ...rest }) => {
  const buttonClass = classNames(className, styles.button);

  return (
    <button className={buttonClass} type={type === 'submit' ? 'submit' : 'button'} {...rest}>
      {children}
    </button>
  );
};

export default Button;
