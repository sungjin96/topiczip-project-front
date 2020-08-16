import { FC, useCallback, useEffect, useRef } from 'react';
import {
    SideNavContainer,
    SideNavHotContentContainer,
    SideNavHeaderContainer,
    SideNavCategoryName,
    SideNavMoreButton,
    SideNavContentContainer,
} from './SideNav.styled';
import HotBlogCard from 'components/home/cards/hotBlogCard/HotBlogCard.component';

const SideNav: FC = () => {
    const sideNavElementRef = useRef();

    useEffect(() => {
        console.log(sideNavElementRef.current.getBoundingClientRect());
        console.log(pageYOffset - sideNavElementRef.current.getBoundingClientRect().bottom);
        console.log(scrollY);
    }, []);

    return (
        <SideNavContainer ref={sideNavElementRef}>
            <SideNavHotContentContainer>
                <SideNavHeaderContainer>
                    <SideNavCategoryName>Hot Blog</SideNavCategoryName>
                    <SideNavMoreButton>MORE</SideNavMoreButton>
                </SideNavHeaderContainer>
                <SideNavContentContainer>
                    <HotBlogCard />
                    <HotBlogCard />
                    <HotBlogCard />
                    <HotBlogCard />
                    <HotBlogCard />
                    <HotBlogCard />
                    <HotBlogCard />
                </SideNavContentContainer>
            </SideNavHotContentContainer>
            <SideNavHotContentContainer>
                <SideNavHeaderContainer>
                    <SideNavCategoryName>Hot Story</SideNavCategoryName>
                    <SideNavMoreButton>MORE</SideNavMoreButton>
                </SideNavHeaderContainer>
            </SideNavHotContentContainer>
            <SideNavHotContentContainer>
                <SideNavHeaderContainer>
                    <SideNavCategoryName>Hot Tag</SideNavCategoryName>
                    <SideNavMoreButton>MORE</SideNavMoreButton>
                </SideNavHeaderContainer>
            </SideNavHotContentContainer>
        </SideNavContainer>
    );
};

export default SideNav;
