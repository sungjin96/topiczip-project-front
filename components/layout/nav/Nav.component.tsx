import { NextComponentType } from 'next';
import {
    NavLogoContainer,
    NavContainer,
    NavMenuContainer,
    NavWrapper,
    NavAvatarContainer,
    NavNotificationContainer,
    NavSearchContainer,
} from './Nav.styled';
import { useState } from 'react';

type NavComponentPropsType = {};

const NavComponent: NextComponentType<NavComponentPropsType> = () => {
    const [isShowNav, setIsShowNav] = useState(true);
    let prevScrollPos = pageYOffset;

    onscroll = () => {
        const currentScrollPos = pageYOffset;
        if (prevScrollPos > currentScrollPos && !isShowNav) {
            setIsShowNav(true);
        } else if (prevScrollPos <= currentScrollPos && isShowNav) {
            setIsShowNav(false);
        }
        prevScrollPos = currentScrollPos;
    };
    return (
        <NavWrapper isShowNav={isShowNav}>
            <NavContainer>
                <NavLogoContainer>TOPIC.zip</NavLogoContainer>
                <NavMenuContainer>
                    <NavSearchContainer>검색</NavSearchContainer>
                    <NavNotificationContainer>알림</NavNotificationContainer>
                    <NavAvatarContainer></NavAvatarContainer>
                </NavMenuContainer>
            </NavContainer>
        </NavWrapper>
    );
};

export default NavComponent;
