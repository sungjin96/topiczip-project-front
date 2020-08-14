import styled from 'styled-components';

export const NavWrapper = styled.nav`
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const NavContainer = styled.div`
    max-width: 1040px;
    margin: 0 auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavLogoContainer = styled.div``;

export const NavMenuContainer = styled.ul`
    display: flex;
    align-items: center;
`;

export const NavSearchContainer = styled.li`
    margin-left: 22px;
`;

export const NavNotificationContainer = styled.li`
    margin-left: 22px;
`;

export const NavAvatarContainer = styled.li`
    width: 30px;
    height: 30px;
    margin-left: 22px;
    border: 1px solid #000;
    border-radius: 100px;
`;
