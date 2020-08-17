import { NextPage } from 'next';
import Layout from 'components/layout';
import PostListByTagPage from 'components/postListByTag/PostListByTag.page';

type PostListByTagPropsType = {
    slug: string;
};

const PostListByTag: NextPage<PostListByTagPropsType> = ({ slug }) => {
    return (
        <Layout>
            <PostListByTagPage slug={slug} />
        </Layout>
    );
};

PostListByTag.getInitialProps = ({ query }) => {
    const slug = query.slug as string;
    return {
        slug,
    };
};

export default PostListByTag;
