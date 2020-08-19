import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HotBlogCardContainer = styled.article`
    padding: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    transition: 0.4s all;

    &:hover {
        box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1), -1px -1px 0 rgba(0, 0, 0, 0.1);
    }
`;

export const ContentContainer = styled.div`
    display: flex;
`;

export const AvatarContainer = styled.div``;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 1000px;
    margin-right: 15px;
`;

export const BodyContainer = styled.div``;

export const AuthorName = styled.h4`
    font-size: ${({ theme }) => theme.size.h4};
    font-weight: bold;
    margin-bottom: 8px;

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.primary};
    }
`;

export const Content = styled.p`
    color: ${({ theme }) => theme.color.lightGray};
`;

export const DateContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${({ theme }) => theme.color.primary};
    margin-top: 15px;
`;

export const Date = styled.p``;

export const Icon = styled(FontAwesomeIcon)`
    margin-right: 4px;
`;
