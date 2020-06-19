import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import Icon from '../../../../Icon';
import {
    Col as LCol,
    Container as LContainer
} from '../Layout/src/index';
import { Search as RFSearch, ArrowLeft } from 'react-feather';

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    padding: 0 83px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.08);
    background-color: #fff;

    width: 100%;
    position: fixed;
    z-index: 2;
    top: 0;

    @media only screen and (max-width: 899px) {
        width: 100%;
        position: fixed;
        padding: unset;
        z-index: 2;
        top: 0;
    }
`;

export const Col = styled(LCol)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 0;
width: 20%;
height: 90px;
@media only screen and (max-width: 1150px) {
    width: 33%;
    justify-content: flex-start;
}
@media only screen and (max-width: 899px) {
    justify-content: space-between;
    width: 50%;
 }
@media only screen and (max-width: 500px) {
   justify-content: space-between;
   width: 50%;
}
`;

export const ColMed = styled(LCol)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 0;
width: 50%;
height: 90px;
@media only screen and (max-width: 1150px) {
    width:33%;
}

@media only screen and (max-width: 899px) {
    width:50%;
}
`;

export const ColEnd = styled(Col)`
justify-content: flex-end;
padding: 20px 20px;
grid-gap: 1em;
width: 29%;
@media only screen and (max-width: 1150px) {
    width:33%;
}
@media only screen and (max-width: 899px) {
    display: none;
}
`;

export const Menu = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    padding: 30px;
    height: 90px;
    border-right: 1px solid #f0f2f7;
    @media only screen and (max-width: 899px) {
        width: 70px;
        display: flex;
    }
`;

export const SearchBoard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 1150px) {
        margin-left: 140px;
    }
    @media only screen and (max-width: 899px) {
        margin-left: 140px;
    }
`;

export const Logo = styled(Link)`
    margin: 0 40px 0;
`;

export const LogoImage = styled.img`
    width: 160px;
    margin-left: 27px;
    @media only screen and (max-width: 799px) {
        width: 140px;
        display: flex;
        align-items: space-between;
        justify-content: space-between;
        margin-left: 27px
    }
`;

export const Cart = styled.div`
    display: flex;
    font-size: 12px;
    font-weight: 600;
    color: #696969;
    border-radius: 24px;

`;

export const CartPrice = styled.span`
    padding-right: 1.5em;
    padding-left: 5px;
    line-height: 20px;
    @media only screen and (max-width: 899px) {
        display: none
    }
`;

export const Iconcart = styled.span`
    @media only screen and (max-width: 899px) {
        margin-right: 5px;
    }
`;

export const Badge = styled.div`
    padding: 7px;
    line-height: 7px;
    border-radius: 24px;
    font-size: 12px;
    background-color: #c71223;
    color: #fff;
`;

export const Favorites = styled(Link)`
    display: flex;
    font-size: 12px;
    font-weight: 600;
    color: #696969;
    border-radius: 24px;
    margin-right: 12.5px;
    margin-left: 12.5px;
`;

export const FavoritesText = styled.span`
    line-height: 20px;
`;

export const Signin = styled.button`
    display: flex;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 8px 20px 8px 20px;
    color: #fff;
    background: #c71223;
    border-radius: 24px;
    margin-left: 10px;
`;

export const IconSearch = styled(RFSearch)`
    width: 30px;
    height: 30px;
    color: #0267C1;
    @media only screen and (min-width: 1150px) {
        display: none;
    }
`;

export const IconSearchALL = styled(RFSearch)`
    width: 30px;
    height: 30px;
    color: #0267C1;
`;

export const IconArrowLeft = styled(ArrowLeft)`
    width: 30px;
    height: 30px;
    color: #0267C1;
    @media only screen and (min-width: 1150px) {
        display: none;
    }
`;

export const Container = styled.div`
    display: flex;
    flex: auto;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    padding: 1.75rem 3.75rem 1.75rem 3.75rem;

    @media only screen and (max-width: 1000px) {
        padding: 0.75rem 1.75rem 0.75rem 1.75rem;
    }
`;

export const SubContainer = styled(LContainer)`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 20px;
margin-bottom: 10px;
outline: 0;
`;

export const ContainerButton = styled.button`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 32px;
    width: 100%;

    @media only screen and (max-width: 1000px) {
        height: 26px;
        margin-top: 3px;
        margin-bottom: 3px;
    }
`;

export const ContainerButtonIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 15%;
    padding: 5px;

    background: #ffffff;
    border: 1px solid ${props => props.color};
    box-sizing: border-box;
    border-radius: 4px 0px 0px 4px;

    @media only screen and (max-width: 1000px) {
        height: 26px;
        padding: 3px;
    }
`;

export const ContainerButtonText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 85%;
    height: 32px;
    padding: 5px;
    color: #fff;
    background: ${props => props.color};
    border-radius: 0px 4px 4px 0px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.702222px;

    @media only screen and (max-width: 1000px) {
        height: 26px;
        padding: 3px;
        font-size: 11px;
        line-height: 12px;
    }
`;

export const ContainerMainInput = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 48px;
    border: 0.79px solid #0267C1;
    box-sizing: border-box;
    border-radius: 4.74px;

`;

export const ContainerInputLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 20%;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;

    color: #0267C1 ;

    cursor: ${props => props.cursor || 'default'};

    @media only screen and (max-width: 1000px) {
        padding: 3px;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 11px;
        line-height: 12px;
    }
`;

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    padding: 5px;
    color: #fff;
    background: ${props => props.color};
    border-radius: 0px 4px 4px 0px;

`;

export const Input = styled.input`
    border: none;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;

    @media only screen and (max-width: 1000px) {
        font-size: 11px;
        line-height: 12px;
    }
`;

export const ModalButton = styled.button`
    background-color: ${props => props.backgroundColor};
    text-align: center;
    height: 32px;
    border-radius: 4.74px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.702222px;
    color: ${props => props.textColor};

    width: 100%;

    @media only screen and (max-width: 1000px) {
        height: 26px;
        font-size: 11px;
        line-height: 12px;
    }
`;

export const ModalLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
    a {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.702222px;
        color: #828282 @media only screen and (max-width: 1000px) {
            font-size: 11px;
            line-height: 12px;
        }
    }
`;

export const CustomIcon = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export const SignedIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 600;
    padding: 8px 20px 8px 20px;
    color: #0267C1;
    background: #ffffff;

    span {
        margin-left: 4px;
        margin-right: 6px;
    }
`;

export const Bag = styled.div`
    display: none;

    @media only screen and (max-width: 899px) {
        display : block;
        position: absolut;
        left : 85px;
    }

`;

export const ContainerMainError = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 5px;
    margin-bottom: 5px;
    height: 32px;

    @media only screen and (max-width: 1000px) {
        margin-top: 3px;
        margin-bottom: 3px;
        height: 26px;
    }

    span {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        color: #c0392b;

        text-align: center;
    }
`
