import { FC } from 'react';
import { ButtonContainer } from './Button.styled';

type ButtonComponentPropsType = {
    size?: 'small' | 'big';
    type?: 'inline';
    color?: string;
    onClick?: any;
};

const Button: FC<ButtonComponentPropsType> = ({ children, ...props }) => {
    return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
