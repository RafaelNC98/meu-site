import styled from 'styled-components';

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 50px;
    z-index: 9999;
    overflow-y: scroll;
`;

export const StyledContent = styled.div`
    background-color: white;
    max-width: 700px;
    min-height: 300px;
    margin: 0 auto;
`;

export const StyledLoginContent = styled.div`
    background-color: white;
    max-width: 493px;
    max-height: 679px;
    min-width: 290px;
    min-height: 400px;

    height: 90%;
    width: 35%;
    margin: 0 auto;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: 952px) {
        height: 90%;
        width: 38%;
    }

    @media only screen and (min-width: 952px) and (max-width: 1100px) {
        height: 90%;
        width: 46%;
    }

    @media only screen and (min-width: 1100px) and (max-width: 1240px) {
        height: 90%;
        width: 42%;
    }
`;


export const StyledAlertContent = styled.div`
    background-color: white;
    max-width: 420px;
    max-height: 579px;
    min-width: 300px;
    min-height: 400px;

    height: 70%;
    width: 35%;
    margin: 0 auto;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: 952px) {
        height: 70%;
        width: 40%;
    }

    @media only screen and (min-width: 952px) and (max-width: 1100px) {
        height: 70%;
        width: 45%;
    }

    @media only screen and (min-width: 1100px) and (max-width: 1240px) {
        height: 80%;
        width: 50%;
    }
`;