import styled from 'styled-components';

import message from 'asset/icons/message-square.svg';
import date from 'asset/icons/date.svg';
import heart from 'asset/icons/heart_full.svg';
import { media } from 'styles/globalStyle';

export const BigCardContainer = styled.article`
    color: ${({ theme }) => theme.color.info};

    display: flex;
    flex-direction: column;

    grid-row: 1/3;
    ${media('tab-port', `grid-column: 1/4;`)}
`;

export const BigCardImageContainer = styled.div``;

export const BigCardImage = styled.img`
    width: 100%;
    height: 250px;
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
`;

export const Avata = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 100px;
`;

export const AuthorName = styled.p``;

export const CardTitle = styled.h3`
    display: block;
    font-size: ${({ theme }) => theme.size.h3};
    font-family: 'Merriweather', serif;
    font-weight: bold;
    padding-bottom: 18px;
`;

export const BigCardBodyContainer = styled.div`
    flex: 1;
`;

export const CardContent = styled.p`
    flex: 1;
    font-size: ${({ theme }) => theme.size.h6};
    font-family: 'Merriweather', serif;
    font-weight: 300;
    line-height: 20px;
`;

export const BigCardFooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.primary};
    font-size: 14px;
`;

export const CardDateContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const DateIcon = styled(date)``;

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

export const MessageIcon = styled(message)``;

export const HeartIcon = styled(heart)``;
