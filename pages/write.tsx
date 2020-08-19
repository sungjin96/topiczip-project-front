import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Layout from 'components/layout';
import Head from 'next/head';

const WritePage = dynamic(() => import('components/write/Write.page'), { ssr: false });

const Write: NextPage = () => {
    return (
        <Layout>
            <WritePage />
        </Layout>
    );
};

export default Write;
