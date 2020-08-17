import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { media } from 'styles/globalStyle';

export const BigCardContainer = styled.article`
    color: ${({ theme }) => theme.color.info};

    display: flex;
    flex-direction: column;

    grid-row: 1/3;
    ${media('tab-port', `grid-column: 1/4;`)};
    transition: 0.4s box-shadow;

    &:hover {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
`;

export const BigCardImageContainer = styled.div`
    overflow: hidden;
`;

export const BigCardImage = styled.img`
    width: 100%;
    height: 250px;
    transition: 0.4s transform;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

export const BigCardContentContainer = styled.div`
    flex: 1;
    padding: 10px 18px;
    display: flex;
    flex-direction: column;
`;

export const BigCardHeaderContainer = styled.div``;

export const AvataContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: 3px;
    transition: 0.2s transform;

    &:hover {
        transform: scale(1.1);
    }
`;

export const Avata = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 100px;
    margin-right: 4px;
`;

export const AuthorName = styled.p`
    transition: 0.2s color;
    font-size: 1.1rem;

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.darkPrimary};
    }
`;

export const CardTitle = styled.h3`
    display: block;
    font-size: ${({ theme }) => theme.size.h4};
    font-weight: bold;
    padding-bottom: 18px;
    transition: 0.2s color;

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.primary};
    }
`;

export const BigCardBodyContainer = styled.div`
    flex: 1;
`;

export const CardContent = styled.p`
    flex: 1;
    font-size: ${({ theme }) => theme.size.h6};
    color: ${({ theme }) => theme.color.lightGray};
    font-weight: 300;
    line-height: 20px;
`;

export const BigCardFooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.primary};
    font-size: 14px;
    margin-top: 10px;
`;

export const CardDateContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const DateIcon = styled(FontAwesomeIcon)`
    margin-right: 4px;
`;

export const UpdatedAt = styled.p``;

export const CardStateContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

export const Count = styled.p`
    margin-left: 4px;
`;

export const MessageIcon = styled(FontAwesomeIcon)``;

export const HeartIcon = styled(FontAwesomeIcon)``;
