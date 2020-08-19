import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CardWrapper = styled.article`
    width: 100%;
    height: 115px;
    display: flex;

    margin-top: 20px;
`;

export const CardImageContainer = styled.div`
    width: 163px;
    height: 100%;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const CardContentContainer = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardTitle = styled.h3`
    font-size: ${({ theme }) => theme.size.h6};
    font-weight: bold;
`;

export const CardInfoContainer = styled.div`
    color: ${({ theme }) => theme.color.primary};
`;

export const CardAuthorName = styled.p`
    margin-bottom: 4px;
`;

export const CardUpdatedAt = styled.p``;

export const Icon = styled(FontAwesomeIcon)`
    margin-right: 4px;
`;
