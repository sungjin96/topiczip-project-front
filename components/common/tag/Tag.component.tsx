import { FC } from 'react';
import { TagContainer, TagContent } from './Tag.styled';
import CloseButton from 'components/common/closeButton/CloseButton.component';

type TagPropsType = {
    type?: 'close';
};

const Tag: FC<TagPropsType> = ({ children, type }) => {
    return (
        <TagContainer type={type}>
            <TagContent>{children}</TagContent>
            {type === 'close' ? <CloseButton /> : ''}
        </TagContainer>
    );
};

export default Tag;
