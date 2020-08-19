import styled from 'styled-components';

export const CloseButtonContainer = styled.button`
    /* Reset */
    background-color: transparent;
    border-color: transparent;

    /* Cursor */
    cursor: pointer;

    /* Size */
    height: 16px;
    width: 16px;

    /* Used to position the inner */
    position: relative;
`;

export const CloseButtonIcon1 = styled.div`
    /* Background color */
    background-color: rgba(0, 0, 0, 0.3);

    /* Position */
    left: 0px;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%) rotate(45deg);

    /* Size */
    height: 1px;
    width: 100%;
`;

export const CloseButtonIcon2 = styled.div`
    /* Background color */
    background-color: rgba(0, 0, 0, 0.3);

    /* Position */
    left: 50%;
    position: absolute;
    top: 0px;
    transform: translate(-50%, 0%) rotate(45deg);

    /* Size */
    height: 100%;
    width: 1px;
`;
