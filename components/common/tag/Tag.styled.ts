import styled from 'styled-components';

type TagPropsType = {
    type?: 'close';
};

export const TagContainer = styled.div<TagPropsType>`
    align-items: center;
    display: inline-flex;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.primary};

    border-radius: 9999px;

    padding: 4px 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.color.primary};

    &:hover {
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.white};
    }
`;

export const TagContent = styled.div<TagPropsType>`
    margin-right: ${({ type }) => (type === 'close' ? '6px' : '0')};
`;
