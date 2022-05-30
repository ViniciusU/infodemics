import React, { useState } from "react";
import {Link} from "react-router-dom";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./styles";
import LogoImg from "../../assets/logo.svg";


export function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/products"> Todas as noticias</NavbarLink>
            <NavbarLink to="/contact"> Fale conosco</NavbarLink>
            <NavbarLink to="/dashboard">Dashboard</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
        
          <NavbarLinkExtended to="/" onClick={() => {setExtendNavbar(false);}}> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/products"  onClick={() => {setExtendNavbar(false);}}> Products</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"  onClick={() => {setExtendNavbar(false);}}> Contact Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"  onClick={() => {setExtendNavbar(false);}}> About Us</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}