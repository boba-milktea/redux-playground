import type { ReactNode } from 'react';

interface ButtonType {
  children: ReactNode;
  onClick?: () => void;
  style?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

const Button = ({ children, onClick, type, style }: ButtonType) => {
  const styles = style === 'link' ? 'link-btn' : 'btn';
  return (
    <button onClick={onClick} className={styles} type={type}>
      {children}
    </button>
  );
};

export default Button;
