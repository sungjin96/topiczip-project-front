import { FC } from 'react';
import { MainCardContainer, MainSectionContainer } from './MainSection.styled';
import DefaultCardComponent from 'components/cards/defaultCard/DefaultCard.component';
import SideNav from 'components/home/sideNav/SideNav.component';

type MainSectionComponentPropsType = {};

const MainSectionComponent: FC<MainSectionComponentPropsType> = () => {
    return (
        <MainSectionContainer>
            <MainCardContainer>
                <DefaultCardComponent />
                <DefaultCardComponent />
                <DefaultCardComponent />
                <DefaultCardComponent />
                <DefaultCardComponent />
                <DefaultCardComponent />
                <DefaultCardComponent />
                <DefaultCardComponent />
                <DefaultCardComponent />
            </MainCardContainer>

            <SideNav />
        </MainSectionContainer>
    );
};

export default MainSectionComponent;
