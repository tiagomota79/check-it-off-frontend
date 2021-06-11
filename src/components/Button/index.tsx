import React from 'react';
import {
  Plus,
  X,
  Eye,
  EyeOff,
  Trash,
  ClipboardList,
  Check,
} from '@styled-icons/heroicons-solid';

import { StyledButton } from './styles';

import { Icons } from '../../constants/icons';

export interface IProps {
  label?: string;
  action: (action: any) => void;
  icon?: string;
  withMargin: boolean;
}

const Button: React.FC<IProps> = ({ label, action, icon, withMargin }) => {
  const iconElement = () => {
    switch (icon) {
      case Icons.Plus:
        return <Plus size='18' />;
      case Icons.Cancel:
        return <X size='18' />;
      case Icons.EyeOpen:
        return <Eye size='18' />;
      case Icons.EyeClosed:
        return <EyeOff size='18' />;
      case Icons.Trash:
        return <Trash size='18' />;
      case Icons.Clipboard:
        return <ClipboardList size='18' />;
      case Icons.Check:
        return <Check size='18' />;
      default:
        return null;
    }
  };

  return (
    <StyledButton
      onClick={action}
      withGap={Boolean(label)}
      withMargin={withMargin}
    >
      {label && <div>{label}</div>}
      <div>{iconElement()}</div>
    </StyledButton>
  );
};

export default Button;
