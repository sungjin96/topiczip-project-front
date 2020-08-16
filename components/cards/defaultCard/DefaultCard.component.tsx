import { NextComponentType } from 'next';
import {
    DefaultCardWrapper,
    DefaultCardImageWrapper,
    DefaultCardContentWrapper,
    DefaultCardHeaderContainer,
    DefaultCardTitleContainer,
    DefaultCardBodyContainer,
    DefaultCardFooterContainer,
    DefaultCardAuthorContainer,
    DefaultCardAvatar,
    DefaultCardNickName,
    DefaultCardUpdatedAt,
    DefaultCardImage,
    Count,
    IconContainer,
    Icon,
} from './DefaultCard.styled';
import { faClock, faHeart, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
type DefaultCardComponentPropsType = {};

const DefaultCardComponent: NextComponentType<DefaultCardComponentPropsType> = () => {
    return (
        <DefaultCardWrapper>
            <DefaultCardImageWrapper>
                <DefaultCardImage src="/images/ex/card_image1.png" alt="title" />
            </DefaultCardImageWrapper>
            <DefaultCardContentWrapper>
                <DefaultCardHeaderContainer>
                    <IconContainer>
                        <Icon icon={faCommentAlt} />
                        <Count>10</Count>
                    </IconContainer>
                    <IconContainer>
                        <Icon icon={faHeart} />
                        <Count>2.5k</Count>
                    </IconContainer>
                </DefaultCardHeaderContainer>
                <DefaultCardTitleContainer>Amet minim mollit non deserunt ullamco est si</DefaultCardTitleContainer>
                <DefaultCardBodyContainer>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse ...
                </DefaultCardBodyContainer>
                <DefaultCardFooterContainer>
                    <DefaultCardAuthorContainer>
                        <DefaultCardAvatar src="/images/ex/avata.png" alt="사림 이름" />
                        <DefaultCardNickName>Esther Howard</DefaultCardNickName>
                    </DefaultCardAuthorContainer>

                    <DefaultCardUpdatedAt>
                        <Icon icon={faClock} />
                        November 7, 2020
                    </DefaultCardUpdatedAt>
                </DefaultCardFooterContainer>
            </DefaultCardContentWrapper>
        </DefaultCardWrapper>
    );
};

export default DefaultCardComponent;
