import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type NavPropsType = {
    isShowNav: boolean;
};

export const NavWrapper = styled.nav<NavPropsType>`
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: sticky;
    transition: 0.3s top;
    top: ${({ isShowNav }) => (isShowNav ? '0' : '-50px')};
    background-color: #fff;
    z-index: 1;
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

export const DetailMenuContainer = styled.ul`
    display: none;
    position: absolute;
    width: 230px;
    background-color: ${({ theme }) => theme.color.basic};
    top: 300%;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.4s top;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const DetailMenuProfileContainer = styled.li`
    padding: 14px;
`;

export const ProfileName = styled.p`
    font-size: ${({ theme }) => theme.size.h6};
    font-weight: bold;
`;

export const ProfileNickName = styled.p`
    color: ${({ theme }) => theme.color.primary};
    margin-top: 4px;
`;

export const DetailMenuItem = styled.li`
    padding: 7px 14px;
    display: flex;
    font-size: 16px;
    color: ${({ theme }) => theme.color.info};

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.lightInfo};
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    margin-right: 14px;
`;

export const MenuName = styled.p``;

export const NavAvatarContainer = styled.li`
    width: 30px;
    height: 30px;
    margin-left: 22px;
    position: relative;

    &:hover {
        ${DetailMenuContainer} {
            display: block;
            top: 100%;
        }
    }
`;

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100px;
`;
