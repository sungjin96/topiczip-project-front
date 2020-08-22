import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const media = (device: 'phone' | 'tab-port' | 'tab-land' | 'big-desktop' | number, css: string) => {
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

    if (typeof device === 'number') {
        return `
            @media only screen and (max-width: ${device}px) {
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
   
   .ck-editor {
     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
   }
   
   .ck-toolbar {
     border: none !important;
     background-color: #fff !important;
   }
   
    .ck-editor__main {
      border: none;
    }
    
    .ck-content {
      min-height: 600px;
      border: none !important;
      
      font-family: 'Merriweather', serif;
      font-size: 1.4rem;
      letter-spacing: 1px;
      line-height: 22px;
      font-weight: 300;
    }
    
    .ck-content.ck-focused {
      border: none !important;
      box-shadow: none !important;
    }
    
    .ck-content h1 {
      font-size: 2.8rem;
      font-weight: bold;
    }
    
    .ck-content h2 {
      font-size: 2.4rem;
      font-weight: bold;
    } 
    .ck-content h3 {
      font-size: 2.2rem;
      font-weight: bold;
    } 
`;

export default GlobalStyle;
