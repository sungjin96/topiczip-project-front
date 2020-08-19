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
import HotPostCard from 'components/home/cards/hotPostCard/HotPostCard.component';
import Tag from 'components/common/tag/Tag.component';

const SideNav: FC = () => {
    return (
        <SideNavContainer>
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
                </SideNavContentContainer>
            </SideNavHotContentContainer>
            <SideNavHotContentContainer>
                <SideNavHeaderContainer>
                    <SideNavCategoryName>Hot Story</SideNavCategoryName>
                    <SideNavMoreButton>MORE</SideNavMoreButton>
                </SideNavHeaderContainer>
                <SideNavContentContainer>
                    <HotPostCard />
                    <HotPostCard />
                    <HotPostCard />
                    <HotPostCard />
                </SideNavContentContainer>
            </SideNavHotContentContainer>
            <SideNavHotContentContainer>
                <SideNavHeaderContainer>
                    <SideNavCategoryName>Hot Tag</SideNavCategoryName>
                    <SideNavMoreButton>MORE</SideNavMoreButton>
                </SideNavHeaderContainer>
                <SideNavContentContainer>
                    <Tag>React</Tag>
                    <Tag>Next</Tag>
                    <Tag>Express</Tag>
                    <Tag>Go</Tag>
                    <Tag>WebDeveloper</Tag>
                    <Tag>Food</Tag>
                    <Tag>일상</Tag>
                    <Tag>일</Tag>
                    <Tag>공부</Tag>
                    <Tag>스터디</Tag>
                </SideNavContentContainer>
            </SideNavHotContentContainer>
        </SideNavContainer>
    );
};

export default SideNav;
