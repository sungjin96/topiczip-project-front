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
} from './DefaultCard.styled';

type DefaultCardComponentPropsType = {};

const DefaultCardComponent: NextComponentType<DefaultCardComponentPropsType> = () => {
    return (
        <DefaultCardWrapper>
            <DefaultCardImageWrapper>Card</DefaultCardImageWrapper>
            <DefaultCardContentWrapper>
                <DefaultCardHeaderContainer>10개</DefaultCardHeaderContainer>
                <DefaultCardTitleContainer>Amet minim mollit non deserunt ullamco est si</DefaultCardTitleContainer>
                <DefaultCardBodyContainer>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse ...
                </DefaultCardBodyContainer>
                <DefaultCardFooterContainer>
                    <DefaultCardAuthorContainer>
                        <DefaultCardAvatar></DefaultCardAvatar>
                        <DefaultCardNickName>Esther Howard</DefaultCardNickName>
                    </DefaultCardAuthorContainer>
                    <DefaultCardUpdatedAt>November 7, 2020</DefaultCardUpdatedAt>
                </DefaultCardFooterContainer>
            </DefaultCardContentWrapper>
        </DefaultCardWrapper>
    );
};

export default DefaultCardComponent;
