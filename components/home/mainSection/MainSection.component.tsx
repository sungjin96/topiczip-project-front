import { FC } from 'react';
import { MainCardContainer, MainSectionContainer } from './MainSection.styled';

type MainSectionComponentPropsType = {};

const MainSectionComponent: FC<MainSectionComponentPropsType> = () => {
    return (
        <MainSectionContainer>
            <h1>Top Section</h1>
        </MainSectionContainer>
    );
};

export default MainSectionComponent;
