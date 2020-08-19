import { FC } from 'react';
import { Container } from 'components/common/common.styled';
import TopSectionComponent from 'components/home/topSection/TopSection.component';
import MainSectionComponent from 'components/home/mainSection/MainSection.component';

type HomePagePropstype = {};

const HomePage: FC<HomePagePropstype> = () => {
    return (
        <Container>
            <TopSectionComponent />
            <MainSectionComponent />
        </Container>
    );
};

export default HomePage;
