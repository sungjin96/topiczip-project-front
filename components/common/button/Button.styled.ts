import styled from 'styled-components';

type ButtonPropsType = {
    size?: 'small' | 'big';
    type?: 'inline';
    color?: string;
};

export const ButtonContainer = styled.a<ButtonPropsType>`
    display: inline-block;
    cursor: pointer;
    transition: 0.4s color, 0.2s transform;

    border: 1px ${({ color, theme }) => color || theme.color.primary} solid;
    background-color: ${({ color, type, theme }) => {
        const realColor = color || theme.color.primary;
        return type === 'inline' ? '#fff' : realColor;
    }};
    color: ${({ color, type, theme }) => {
        const realColor = color || theme.color.primary;
        return type === 'inline' ? realColor : '#fff';
    }};

    padding: ${({ size }) => {
        return size === 'small' ? '4px 10px' : size === 'big' ? '8px 22px' : '6px 16px';
    }};

    font-size: ${({ size, theme }) => {
        return size === 'small' ? theme.size.h6 : size === 'big' ? theme.size.h4 : theme.size.h5;
    }};

    &:hover {
        color: ${({ color, type, theme }) => {
            const realColor = color || theme.color.primary;
            return type === 'inline' ? '#fff' : realColor;
        }};
        background-color: ${({ color, type, theme }) => {
            const realColor = color || theme.color.primary;
            return type === 'inline' ? realColor : '#fff';
        }};
    }

    &:active {
        transform: scale(0.95);
        color: ${({ color, type, theme }) => {
            const realColor = color || theme.color.darkPrimary;
            return type === 'inline' ? '#fff' : realColor;
        }};
        background-color: ${({ color, type, theme }) => {
            const realColor = color || theme.color.darkPrimary;
            return type === 'inline' ? realColor : '#fff';
        }};
    }
`;
