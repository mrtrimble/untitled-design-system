import '../styles/scss/style.scss';

export interface ButtonProps {
  primary?: boolean;
  type?: 'primary' | 'secondary' | 'plain';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const createButton = ({ type, label, onClick }: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  if (onClick) {
    btn.addEventListener('click', onClick);
  }

  // const buttonType = type;
  btn.className = 'button';
  if (type) {
    btn.classList.add(type);
  }

  return btn;
};
