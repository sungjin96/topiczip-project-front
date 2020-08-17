import { FC } from 'react';
import { Container } from 'components/common/common.styled';
import MainSectionComponent from 'components/home/mainSection/MainSection.component';

import { TagInfo, TagInfoContainer } from './PostListByTag.styled';

type PostListByTagPagePropstype = {
    slug: string;
};

const PostListByTagPage: FC<PostListByTagPagePropstype> = ({ slug }) => {
    return (
        <>
            <TagInfoContainer>
                <Container>
                    <TagInfo>Tag: {slug}</TagInfo>
                </Container>
            </TagInfoContainer>
            <Container>
                <MainSectionComponent />
            </Container>
        </>
    );
};

export default PostListByTagPage;
