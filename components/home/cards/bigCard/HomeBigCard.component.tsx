import { FC } from 'react';
import {
    BigCardContentContainer,
    BigCardContainer,
    BigCardImage,
    BigCardImageContainer,
    BigCardBodyContainer,
    BigCardFooterContainer,
    BigCardHeaderContainer,
    AuthorName,
    Avata,
    AvataContainer,
    CardContent,
    CardDateContainer,
    CardStateContainer,
    CardTitle,
    Count,
    DateIcon,
    UpdatedAt,
    HeartIcon,
    IconContainer,
    MessageIcon,
} from './HomeBigCard.styled';

type HomeBigCardComponentPropsType = {};

const HomeBigCardComponent: FC<HomeBigCardComponentPropsType> = () => {
    return (
        <BigCardContainer>
            <BigCardImageContainer>
                <BigCardImage src="/images/ex/card_image3.png" alt="title" />
            </BigCardImageContainer>
            <BigCardContentContainer>
                <BigCardHeaderContainer>
                    <AvataContainer>
                        <Avata src="/images/ex/avata.png" alt="작성자이름" />
                        <AuthorName>Esther Howard</AuthorName>
                    </AvataContainer>
                    <CardTitle>Amet minim mollit no deserunt ullamco est si</CardTitle>
                </BigCardHeaderContainer>
                <BigCardBodyContainer>
                    <CardContent>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
                        deserunt mollit dolore cillum minim tempor enim.
                    </CardContent>
                </BigCardBodyContainer>
                <BigCardFooterContainer>
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
                </BigCardFooterContainer>
            </BigCardContentContainer>
        </BigCardContainer>
    );
};

export default HomeBigCardComponent;
