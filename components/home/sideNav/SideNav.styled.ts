import styled from 'styled-components';

export const SideNavContainer = styled.div`
    position: sticky;
    top: 40px;
    right: 0;
    width: 328px;
`;

export const SideNavHotContentContainer = styled.div`
    &:not(:first-child) {
        padding-top: 45px;
    }
`;

export const SideNavHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
    padding-bottom: 5px;
    color: ${({ theme }) => theme.color.primary};
`;

export const SideNavCategoryName = styled.p`
    font-size: ${(props) => props.theme.size.h3};
    font-weight: bold;
`;

export const SideNavMoreButton = styled.a`
    font-size: 8px;
    font-weight: bold;
    margin-top: auto;

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.info};
    }

    &:after {
        content: '>';
        margin-left: 4px;
    }
`;

export const SideNavContentContainer = styled.div``;
