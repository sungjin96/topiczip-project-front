import { FC } from 'react';
import {
    HeartIcon,
    MessageIcon,
    IconContainer,
    DateIcon,
    Count,
    CardTitle,
    CardStateContainer,
    CardDateContainer,
    CardContent,
    AvataContainer,
    Avata,
    AuthorName,
    BodyContainer,
    ContentContainer,
    FooterContainer,
    HeaderContainer,
    Image,
    ImageContainer,
    SmallCardContainer,
    UpdatedAt,
} from './HomeSmallCard.styled';
import { BigCardImage } from 'components/home/cards/bigCard/HomeBigCard.styled';

type HomeSmallCardComponentPropsType = {};

const HomeSmallCardComponent: FC<HomeSmallCardComponentPropsType> = () => {
    return (
        <SmallCardContainer>
            <ImageContainer>
                <Image src="/images/ex/card_image4.png" alt="title" />
            </ImageContainer>
            <ContentContainer>
                <HeaderContainer>
                    <AvataContainer>
                        <Avata src="/images/ex/avata.png" alt="작성자이름" />
                        <AuthorName>Esther Howard</AuthorName>
                    </AvataContainer>
                    <CardTitle>Amet minim mollit no deserunt ullamco est si</CardTitle>
                </HeaderContainer>
                <BodyContainer>
                    <CardContent>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.</CardContent>
                </BodyContainer>
                <FooterContainer>
                    <CardDateContainer>
                        <DateIcon />
                        <UpdatedAt>February 28, 2020</UpdatedAt>
                    </CardDateContainer>
                    <CardStateContainer>
                        <IconContainer>
                            <MessageIcon />
                            <Count>12</Count>
                        </IconContainer>
                        <IconContainer>
                            <HeartIcon />
                            <Count>2.4k</Count>
                        </IconContainer>
                    </CardStateContainer>
                </FooterContainer>
            </ContentContainer>
        </SmallCardContainer>
    );
};

export default HomeSmallCardComponent;
