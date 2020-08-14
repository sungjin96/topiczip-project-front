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

type NavComponentPropsType = {};

const NavComponent: NextComponentType<NavComponentPropsType> = () => {
    return (
        <NavWrapper>
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
