import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DefaultCardWrapper = styled.article`
    width: 656px;
    height: 230px;
    box-shadow: 2px 8px 30px rgba(0, 0, 0, 0.1);
    display: flex;
    color: ${({ theme }) => theme.color.info};
    margin-bottom: 18px;
    transition: 0.4s all;
    font-family: 'Merriweather', serif;

    &:hover {
        box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1), -1px -1px 0 rgba(0, 0, 0, 0.1);
    }
`;

export const DefaultCardImageWrapper = styled.div`
    width: 286px;
    height: 100%;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }
`;

export const DefaultCardImage = styled.img`
    width: 100%;
    height: 100%;
    transition: 0.4s all;
    &:hover {
        transform: scale(1.1);
    }
`;

export const DefaultCardContentWrapper = styled.div`
    flex: 1;
    padding: 18px;
    display: flex;
    flex-direction: column;
`;

export const DefaultCardHeaderContainer = styled.div`
    height: 20px;
    display: flex;
    color: ${({ theme }) => theme.color.primary};
`;

export const IconContainer = styled.div`
    display: flex;
    margin-left: 6px;
`;

export const Icon = styled(FontAwesomeIcon)`
    margin-right: 3px;
`;

export const Count = styled.p``;

export const DefaultCardTitleContainer = styled.p`
    font-size: ${(props) => props.theme.size.h3};
    line-height: 30px;
    font-weight: bold;
    padding-bottom: 10px;
    transition: 0.4s all;
    white-space: normal;

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.primary};
    }
`;

export const DefaultCardBodyContainer = styled.div`
    flex: 1;
    font-size: ${(props) => props.theme.size.h6};
    font-weight: 300;
    line-height: 20px;
`;

export const DefaultCardFooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.primary};
`;

export const DefaultCardAuthorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.primary};
    }
`;

export const DefaultCardAvatar = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 100px;
    margin-right: 5px;
`;

export const DefaultCardNickName = styled.div`
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.info};
    }
`;

export const DefaultCardUpdatedAt = styled.div`
    margin-left: auto;
`;
