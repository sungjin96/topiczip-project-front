import { FC } from 'react';

import { CloseButtonContainer, CloseButtonIcon1, CloseButtonIcon2 } from './CloseButton.styled';

type CloseButtonComponentPropsType = {};

const CloseButton: FC<CloseButtonComponentPropsType> = () => {
    return (
        <CloseButtonContainer>
            <CloseButtonIcon1 />
            <CloseButtonIcon2 />
        </CloseButtonContainer>
    );
};

export default CloseButton;
