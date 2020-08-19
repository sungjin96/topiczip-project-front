import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/common/button/Button.component';

export const LoginWrapper = styled.div`
    position: relative;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.8);

    height: 650px;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -1;
`;

export const LoginTitleContainer = styled.div`
    padding: 100px 0 50px 0;
    font-size: ${({ theme }) => theme.size.h2};
    font-weight: bold;
    font-family: 'Merriweather', serif;

    display: flex;
    justify-content: center;
`;

export const LoginTitle = styled.p``;

export const LoginBodyContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const DefaultLoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    border-right: 1px solid ${({ theme }) => theme.color.line};
`;

export const DefaultLoginForm = styled.form``;

export const DefaultLoginInputContainer = styled.div`
    position: relative;
    width: 300px;
    height: 50px;
    margin: 10px auto;
`;

export const DefaultLoginLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.color.primary};
    background-color: #fff;
    border-radius: 1px;
    padding: 2px 3px;

    transition: 0.3s top;
`;

export const DefaultLoginInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.color.primary};
    padding: 16px;
    font-size: 16px;
    color: ${({ theme }) => theme.color.info};

    &:focus,
    &:active,
    &:invalid {
        & + ${DefaultLoginLabel} {
            top: 0;
            background-color: ${({ theme }) => theme.color.primary};
            color: #fff;
        }
    }
`;

export const SignInContainer = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    padding-right: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.color.primary};
`;

export const SignInButton = styled.a`
    margin-left: auto;

    :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.lightPrimary};
    }
`;

export const LoginButton = styled(Button)`
    width: 100%;
    height: 50px;
    font-size: 21px;
    text-align: center;
    line-height: 33px;
`;

export const SNSLoginContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 78px;
`;

export const SNSLoginButton = styled(Button)`
    width: 300px;
    height: 50px;
    margin: 10px auto;
    font-size: 16px;
    text-align: center;
    line-height: 33px;

    position: relative;
`;

export const Icon = styled(FontAwesomeIcon)`
    position: absolute;
`;
