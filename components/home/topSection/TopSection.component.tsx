import { FC } from 'react';
import { TopSectionContainer, LeftContainer, RightContainer } from './TopSection.styled';
import HomeBigCardComponent from 'components/home/cards/bigCard/HomeBigCard.component';
import HomeSmallCardComponent from 'components/home/cards/smallCard/HomeSmallCard.component';

type TopSectionComponentPropsType = {};

const TopSectionComponent: FC<TopSectionComponentPropsType> = () => {
    return (
        <TopSectionContainer>
            <HomeBigCardComponent />
            <HomeSmallCardComponent />
            <HomeSmallCardComponent />
        </TopSectionContainer>
    );
};

export default TopSectionComponent;
