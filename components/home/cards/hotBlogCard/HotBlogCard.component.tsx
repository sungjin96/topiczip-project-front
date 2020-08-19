import { FC } from 'react';

import {
    HotBlogCardContainer,
    DateContainer,
    Content,
    AvatarContainer,
    Avatar,
    BodyContainer,
    ContentContainer,
    AuthorName,
    Date,
    Icon,
} from './HotBlogCard.styled';
import { faClock } from '@fortawesome/free-solid-svg-icons';

type HotBlogCardPropsType = {};

const HotBlogCard: FC<HotBlogCardPropsType> = () => {
    return (
        <HotBlogCardContainer>
            <ContentContainer>
                <AvatarContainer>
                    <Avatar src="/images/ex/avata.png" alt="사용자 이름" />
                </AvatarContainer>
                <BodyContainer>
                    <AuthorName>Esther Howard</AuthorName>
                    <Content>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</Content>
                </BodyContainer>
            </ContentContainer>

            <DateContainer>
                <Icon icon={faClock} />
                <Date>Last Posted, March 13, 2020</Date>
            </DateContainer>
        </HotBlogCardContainer>
    );
};

export default HotBlogCard;
