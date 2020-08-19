import { NextComponentType } from 'next';
import Link from 'next/link';
import {
    NavLogoContainer,
    NavContainer,
    NavMenuContainer,
    NavWrapper,
    NavAvatarContainer,
    NavNotificationContainer,
    NavSearchContainer,
    DetailMenuContainer,
    DetailMenuItem,
    DetailMenuProfileContainer,
    Icon,
    MenuName,
    Avatar,
    ProfileName,
    ProfileNickName,
} from './Nav.styled';
import { useState } from 'react';
import { faCog, faEnvelope, faHome, faListOl, faPenFancy, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
                <NavLogoContainer>
                    <Link href="/">
                        <a>TOPIC.zip</a>
                    </Link>
                </NavLogoContainer>
                <NavMenuContainer>
                    <NavSearchContainer>검색</NavSearchContainer>
                    <NavNotificationContainer>알림</NavNotificationContainer>
                    <NavAvatarContainer>
                        <Avatar src="/images/ex/avata.png" alt="사용자 이름" />
                        <DetailMenuContainer>
                            <DetailMenuProfileContainer>
                                <ProfileName>Jang Sungjin</ProfileName>
                                <ProfileNickName>@Sungjin</ProfileNickName>
                            </DetailMenuProfileContainer>
                            <hr />
                            <DetailMenuItem>
                                <Icon icon={faHome} />
                                <MenuName>홈</MenuName>
                            </DetailMenuItem>
                            <Link href="/write">
                                <DetailMenuItem>
                                    <Icon icon={faPenFancy} />
                                    <MenuName>이야기 작성</MenuName>
                                </DetailMenuItem>
                            </Link>
                            <DetailMenuItem>
                                <Icon icon={faListOl} />
                                <MenuName>내 이야기</MenuName>
                            </DetailMenuItem>
                            <DetailMenuItem>
                                <Icon icon={faEnvelope} />
                                <MenuName>쪽지</MenuName>
                            </DetailMenuItem>
                            <hr />
                            <Link href="/users/config">
                                <DetailMenuItem>
                                    <Icon icon={faCog} />
                                    <MenuName>설정</MenuName>
                                </DetailMenuItem>
                            </Link>
                            <DetailMenuItem>
                                <Icon icon={faSignOutAlt} />
                                <MenuName>로그아웃</MenuName>
                            </DetailMenuItem>
                        </DetailMenuContainer>
                    </NavAvatarContainer>
                </NavMenuContainer>
            </NavContainer>
        </NavWrapper>
    );
};

export default NavComponent;
