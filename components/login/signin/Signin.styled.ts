import styled from 'styled-components';
import { LoginButton } from '../Login.styled';

export const SignBlock = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignInWrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const SignBackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

export const SignInHeaderContainer = styled.div`
    padding: 10px;
    text-align: right;
`;

export const SignInClose = styled.a`
    font-size: 16px;
    color: ${({ theme }) => theme.color.info};
    &:focus {
        cursor: pointer;
    }
`;

export const SignInBodyContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 100px 30px 100px;
`;

export const SignInTitle = styled.h3`
    font-size: ${({ theme }) => theme.size.h4};
    font-family: 'Merriweather', serif;
    font-weight: bold;
    margin-bottom: 25px;
`;

export const SigninButton = styled(LoginButton)`
    margin-top: 50px;
`;
