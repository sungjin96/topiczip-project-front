import { NextPage } from 'next';
import Layout from 'components/layout';
import DefaultCardComponent from 'components/cards/defaultCard/DefaultCard.component';

const Home: NextPage = () => {
    return (
        <Layout>
            <h1 style={{ fontSize: '1rem' }}>Index Page</h1>
            <DefaultCardComponent />
            <DefaultCardComponent />
            <DefaultCardComponent />
            <DefaultCardComponent />
            <DefaultCardComponent />
        </Layout>
    );
};

export default Home;
