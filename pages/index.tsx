import { NextPage } from 'next';
import Layout from 'components/layout';
import HomePage from 'components/home/Home.page';

const Home: NextPage = () => {
    return (
        <Layout>
            <HomePage />
        </Layout>
    );
};

export default Home;
