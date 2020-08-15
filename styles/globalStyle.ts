import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const media = (device: 'phone' | 'tab-port' | 'tab-land' | 'big-desktop', css: string) => {
    if (device === 'phone') {
        return `
            @media only screen and (max-width: 37.5em) {
                ${css}
            } 
        `;
    }

    if (device === 'tab-port') {
        return `
            @media only screen and (max-width: 56.25em) {
                ${css} 
            } 
        `;
    }

    if (device === 'tab-land') {
        return `
            @media only screen and (max-width: 75em) {
                ${css} 
            } 
        `;
    }

    if (device === 'big-desktop') {
        return `
            @media only screen and (max-width: 112.5em) {
                ${css} 
            } 
        `;
    }

    return null;
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
    * {
         box-sizing: border-box;
    } 
    html {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 62.5%;
        
        ${media('tab-land', 'font-size: 56.25%')}
        ${media('tab-port', 'font-size: 50%')}
        ${media('big-desktop', 'font-size: 75%')}
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }
`;

export default GlobalStyle;
