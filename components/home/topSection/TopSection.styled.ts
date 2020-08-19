import styled from 'styled-components';

export const TopSectionContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 424px));
    grid-template-rows: repeat(2, auto);
    padding-bottom: 45px;
    padding-top: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
    grid-gap: 20px;
`;

export const LeftContainer = styled.div`
    margin-right: 20px;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
