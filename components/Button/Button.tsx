import { FunctionComponent, useState } from 'react';
import * as css from './button.module.scss';
import { classnames } from '../../utils/classnames';

export enum ButtonTypes {
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}

interface ButtonProps {
  onClick: () => void;
  type?: ButtonTypes;
  confirmationText?: string;
  tip?: string;
  loading?: boolean;
  disabled?: boolean;
}

const getButtonTypeClass = (type?: ButtonTypes): string | undefined => {
  switch (type) {
    case ButtonTypes.INFO:
      return css['info'];
    case ButtonTypes.SUCCESS:
      return css['success'];
    case ButtonTypes.DANGER:
      return css['danger'];
    case ButtonTypes.WARNING:
      return css['warning'];
  }
};

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  type,
  loading,
  confirmationText,
  disabled,
  tip,
}) => {
  const [hover, setHover] = useState(false);

  const _onMouseEnter = () => {
    setHover(true);
  };

  const _onMouseLeave = () => {
    setHover(false);
  };

  const _onClick = () => {
    if (loading || disabled) return;

    if (confirmationText) {
      if (!confirm(confirmationText)) return;
    }

    return onClick();
  };

  return (
    <button
      className={classnames(
        css['button'],
        getButtonTypeClass(type),
        loading && css['loading'],
        disabled && css['disabled']
      )}
      onClick={_onClick}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
    >
      {children}
      {tip && hover && <div className={css['tip']}>{tip}</div>}
    </button>
  );
};
