import { styled } from "styled-components";

export const Background = styled.section`
    background-image: url("bg-image.jpeg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Navbar = styled.div`
    display: flex;
    overflow-wrap: anywhere;
    padding: 10px 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    padding: 16px 0px;
`;

export const Image = styled.img`
    width: 60px;
    height: 50.227px;
`;

export const ImageQ = styled.img`
    width: 50px;
    height: 50px;
    padding-bottom: 20px;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const MenuButton = styled.div`
    color: white;
    padding: 0px 17px;
    font-size: 16px;
    font-weight: 100;
    font-family: "DM Sans", sans-serif;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .ButtonStyled {
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid white;
        padding: 15px 25px;
        margin-left: 18px;
        letter-spacing: 1px;
    }
`;

export const Intro = styled.div`
    line-height: 1;
    width: 100%;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IntroBG = styled.div`
    min-height: 550px;
    flex-direction: column;
    align-items: center;
`;

export const H1 = styled.h1`
    color: white;
    text-align: center;
    margin: 0px;
    font-size: 50px;
    letter-spacing: -3px;
    font-weight: 300;
    font-family: "DM Sans", sans-serif;
    .nature {
        font-size: 115px;
        font-weight: 400;
        letter-spacing: 2px;
    }
`;

export const Pars = styled.p`
    text-align: center;
    margin: 0px;
    color: white;
    font-size: 15px;
    font-weight: 100;
    font-family: "DM Sans", sans-serif;
    line-height: 24px;
    .Name {
        font-size: 15px;
        color: #536942;
        padding: 10px;
    }
`;

export const Button = styled.button`
    text-align: center;
    background-color: #ffd936;
    color: #536942;
    font-size: 14px;
    font-family: "DM Sans", sans-serif;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    padding: 15px 28px;
    margin: 30px 0px;
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0px;
    align-items: center;
    gap: 16px;
`;

export const Line = styled.hr`
    background-color: #ffd936;
    width: 7%;
    height: 3px;
    border: none;
`;

export const Forum = styled.p`
    color: #536942;
    font-weight: 300;
    font-family: "DM Sans", sans-serif;
    padding: 10px;
    margin: 0;
    .Header {
        font-size: 40px;
        letter-spacing: -2px;
    }
    .Title {
        font-size: 20px;
        letter-spacing: 1px;
    }
    .Text {
        font-size: 16px;
        letter-spacing: 1px;
    }
    .TextCenter {
        font-size: 16px;
        letter-spacing: 1px;
        display: flex;
        text-align: center;
    }
    .Find {
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid;
        padding: 15px 25px;
        letter-spacing: 1px;
    }
    .Questions {
        font-size: 60px;
        letter-spacing: -2px;
    }
`;

export const Services = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 55px 95px;
    gap: 28px;
    .About {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-right: 160px;
        gap: 28px;
    }
`;

export const Service = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Album = styled.img`
    width: 100%;
`;

export const Quote = styled.div`
    width: 100%;
    background-color: #f6f8f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
`;

export const Quotes = styled.p`
    color: #536942;
    font-weight: lighter;
    font-family: "Forum", display;
    font-size: 25px;
    line-height: 43px;
    letter-spacing: 2px;
    padding-inline: 200px;
    text-align: center;
`;

export const About = styled.div`
    color: #536942;
    font-weight: lighter;
    font-family: "Forum", display;
    font-size: 35px;
    line-height: 43px;
    text-align: start;
    padding: 10px;
`;

export const Footer = styled.div`
    background-image: url("footer-hero-big.jpeg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 480px;
`;
