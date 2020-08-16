import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { media } from 'styles/globalStyle';

export const SmallCardContainer = styled.article`
    display: flex;
    grid-column: 2 / span 2;
    ${media('tab-port', `grid-column: 1/4;`)};
    transition: 0.4s box-shadow;

    &:hover {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
`;

export const ImageContainer = styled.div`
    max-width: 250px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    transition: 0.4s transform;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

export const ContentContainer = styled.div`
    flex: 1;
    padding: 10px 18px;
`;

export const HeaderContainer = styled.div``;

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

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.darkPrimary};
    }
`;

export const CardTitle = styled.h3`
    display: block;
    font-size: ${({ theme }) => theme.size.h3};
    font-family: 'Merriweather', serif;
    font-weight: bold;
    padding-bottom: 18px;
    transition: 0.2s color;
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.primary};
    }
`;

export const BodyContainer = styled.div``;

export const CardContent = styled.p`
    flex: 1;
    font-size: ${({ theme }) => theme.size.h6};
    font-family: 'Merriweather', serif;
    font-weight: 300;
    line-height: 20px;
`;

export const FooterContainer = styled.div`
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
