import { FC } from 'react';

import {
    Icon,
    CardTitle,
    CardAuthorName,
    CardContentContainer,
    CardImageContainer,
    CardInfoContainer,
    CardUpdatedAt,
    CardWrapper,
    CardImage,
} from './HotPostCard.styled';
import { faClock } from '@fortawesome/free-solid-svg-icons';

type HotPostCardPropsType = {};

const HotPostCard: FC<HotPostCardPropsType> = () => {
    return (
        <CardWrapper>
            <CardImageContainer>
                <CardImage src="/images/ex/card_image5.png" alt="포스트 이름" />
            </CardImageContainer>
            <CardContentContainer>
                <CardTitle>The Coronavirus May Mess With Thyroid ...</CardTitle>
                <CardInfoContainer>
                    <CardAuthorName>Jang Sungjin</CardAuthorName>
                    <CardUpdatedAt>
                        <Icon icon={faClock} />
                        February 28, 2020
                    </CardUpdatedAt>
                </CardInfoContainer>
            </CardContentContainer>
        </CardWrapper>
    );
};

export default HotPostCard;
