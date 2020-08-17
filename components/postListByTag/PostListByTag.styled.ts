import styled from 'styled-components';

export const TagInfoContainer = styled.div`
    padding: 20px;
    background-color: #fbfbfb;
`;

export const TagInfo = styled.h3`
    font-size: ${({ theme }) => theme.size.h3};
    font-weight: bold;
`;
